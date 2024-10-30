import React, { useState } from 'react';

import { InputContainer, FileNameContainer } from '../Styles/Containerstyles';
import { InputLabel, SelectFile, FileInput } from '../Styles/Inputstyles';
import XLSX, { read } from 'xlsx'
import Header from './Header';

const Results = () => {
    const [fileName, setFileName] = useState(null);

    const handleFile = async (e) => {
        const file = e.target.files[0];
        setFileName(file.name);

        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Process data to add inventory metrics before sending to MongoDB
        const processedItems = processInventoryData(jsonData);

        const filePayload = {
            fileName: file.name,
            products: processedItems,
            uploadDate: new Date()
        };

        
        try {
            const response = await fetch('http://localhost:5002/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(filePayload)
            });

            if (response.ok) {
                console.log('Data successfully sent to backend');
            } else {
                console.log('Failed to send data to backend');
            }
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

    const calculateMetrics = (item) => {
        const { PUSAGE: usage, PMVMNT: movement } = item
        const maxThreshold = movement !== 0 ? usage / movement : 0

        const overMax = usage > maxThreshold
        const underMax = usage < maxThreshold

        return {
            maxThreshold,
            overMaxCount: overMax ? 1 : 0,
            underMaxCount: underMax ? 1 : 0,
            trend: "Stable"
        }
    }

    const processInventoryData = (data) => {
        return data.map(item => {
            const metrics = calculateMetrics(item)
            return {
                itemNumber: item.PPROD,
                sizeCode: item.PSIZE,
                description: item.PPDESC,
                currentUsage: item.PUSAGE,
                movement: item.PMVMNT,
                maxThreshold: metrics.maxThreshold,
                overMaxCount: metrics.overMaxCount,
                underMaxCount: metrics.underMaxCount,
                trend: metrics.trend
            }
        })
    }

    return (
        <>
            <Header />
            <InputContainer>
                <InputLabel htmlFor="upload">
                    <SelectFile>Select File</SelectFile>
                </InputLabel>
                <FileInput type="file" id='upload' onChange={handleFile} />
            </InputContainer>
            <FileNameContainer>
                {fileName && <p>File Name: <span>{fileName}</span></p>}
            </FileNameContainer>
        </>
    );
};

export default Results;