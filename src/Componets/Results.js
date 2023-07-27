import React, { useState } from 'react';
import XLSX from 'xlsx'

const Results = () => {

    const [fileName, setFileName] = useState(null)
    const [data, setData] =useState([])

    const handleFile = async (e) => {
        const file = e.target.files[0]
        setFileName(file.name)
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(worksheet)
        setData(jsonData)
    }
    console.log(data)

    const greenArray = []
    const orangeArray = []
    const redArray = []
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].PUSAGE === 0 || data[i].PMVMNT <= .19) {
            redArray.push(data[i])
        } else if (data[i].PMVMNT <= .3){
            orangeArray.push(data[i])
        } else{ greenArray.push(data[i])}
    }
    console.log(greenArray)
    console.log(orangeArray)
    console.log(redArray)
    return (
        <>
        <div>
            {fileName && (
                <p>File Name: <span>{fileName}</span></p>
            )}
            <input type="file" onChange= {(e) => handleFile(e)}/>
            
        </div>
        
        </>
    );
};

export default Results;