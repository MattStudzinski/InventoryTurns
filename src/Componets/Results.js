import React, { useState } from 'react';
import cloud from './../assets/cloud.svg'
import { GreenParItem, ResultsHolder, GreenParBy, OrangeParItemNum, OrangeParBy, OrangeParItem, RedParBy, RedParItem, RedParItemNum, GreenParItemNum,RedParName, OrangeParName, GreenParName, ListContainer, TitleOfResults } from '../Styles/Resultstyles';
import { InputContainer, FileNameContainer, ResultsTitleContainer, PageContaier } from '../Styles/Containerstyles';
import { InputLabel, CloudSVG, SelectFile, FileInput } from '../Styles/Inputstyles';
import XLSX from 'xlsx'
import Header from './Header';

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
            <Header />
            
    <InputContainer>
        <InputLabel htmlFor="upload">
        <CloudSVG src={cloud} alt="cloud"/>
        <SelectFile>Select File</SelectFile>
        </InputLabel>
            <FileInput type="file" id='upload' onChange= {(e) => handleFile(e)}/>
    </InputContainer>


    <FileNameContainer>
    {fileName && (
                <p>File Name: <span>{fileName}</span></p>
            )}
    </FileNameContainer>
    
    <PageContaier>
    
    {data.length > 1 && 
    <ListContainer>
    <ResultsTitleContainer><TitleOfResults>Items in this list should be pulled from Par Room:</TitleOfResults></ResultsTitleContainer>
            {redArray.map((paritem) => {
                console.log(paritem)
                return(<ResultsHolder>
                    <RedParItem>{paritem.PLOC}</RedParItem>
                    <RedParItem>{paritem.PSIZE}</RedParItem>
                    <RedParName>{paritem.PPDESC}</RedParName>
                    <RedParBy>{paritem.PUM}</RedParBy>
                    <RedParItemNum>{paritem.PUSAGE}</RedParItemNum>
                    <RedParItemNum>{paritem.PONHND}</RedParItemNum>
                    <RedParItemNum>{paritem.PMVMNT}</RedParItemNum>
                    </ResultsHolder>
                )
            })}
    </ListContainer>}


    
        {data.length > 1 && 
        <ListContainer>
        <ResultsTitleContainer><TitleOfResults>Items in this list are at risk and are not used often:</TitleOfResults></ResultsTitleContainer>
            {orangeArray.map((paritem) => {
                console.log(paritem)
                return(
                <ResultsHolder>
                    <OrangeParItem>{paritem.PLOC}</OrangeParItem>
                    <OrangeParItem>{paritem.PSIZE}</OrangeParItem>
                    <OrangeParName>{paritem.PPDESC}</OrangeParName>
                    <OrangeParBy>{paritem.PUM}</OrangeParBy>
                    <OrangeParItemNum>{paritem.PUSAGE}</OrangeParItemNum>
                    <OrangeParItemNum>{paritem.PONHND}</OrangeParItemNum>
                    <OrangeParItemNum>{paritem.PMVMNT}</OrangeParItemNum>
                    </ResultsHolder>
                    
                )
            })}
    </ListContainer>}
  

    
    
    {data.length > 1 && 
    <ListContainer>
    <ResultsTitleContainer><TitleOfResults>Items in this list are used often enough to stay:</TitleOfResults></ResultsTitleContainer>
            {greenArray.map((paritem) => {
                console.log(paritem)
                return(<ResultsHolder>
                    <GreenParItem>{paritem.PSIZE}</GreenParItem>
                    <GreenParName>{paritem.PPDESC}</GreenParName>
                    <GreenParItem>{paritem.PPROD}</GreenParItem>
                    <GreenParItemNum>{paritem.PUSAGE}</GreenParItemNum>
                    <GreenParItemNum>{paritem.PONHND}</GreenParItemNum>
                    <GreenParItemNum>{paritem.PMVMNT}</GreenParItemNum>
                    </ResultsHolder>
                )
            })}
    </ListContainer>}
    </PageContaier>

        
       </>
    );
};

export default Results;