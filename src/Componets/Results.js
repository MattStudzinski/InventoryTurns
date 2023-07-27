import React, { useState } from 'react';
import XLSX from 'xlsx'

const Results = () => {

    const [fileName, setFileName] = useState(null)

    const handleFile = async (e) => {
        const file = e.target.files[0]
        setFileName(file.name)
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(worksheet)
        console.log(jsonData)
    }
    
    return (
        <div>
            {fileName && (
                <p>File Name: <span>{fileName}</span></p>
            )}
            <input type="file" onChange= {(e) => handleFile(e)}/>
        </div>
    );
};

export default Results;