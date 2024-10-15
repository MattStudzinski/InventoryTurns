import React, { useState } from 'react';
import cloud from './../assets/cloud.svg'
import { GreenParItem, ResultsHolder, GreenParBy, OrangeParItemNum, OrangeParBy, OrangeParItem, RedParBy, RedParItem, RedParItemNum, GreenParItemNum,RedParName, OrangeParName, GreenParName, ListContainer, TitleOfResults, RedParItemTurnNumber, GreenParItemTurnNumber, OrangeParItemTurnNumber, ParnameNumberContainer, Description} from '../Styles/Resultstyles';
import { InputContainer, FileNameContainer, ResultsTitleContainer, PageContaier } from '../Styles/Containerstyles';
import { InputLabel, CloudSVG, SelectFile, FileInput } from '../Styles/Inputstyles';
import XLSX, { read } from 'xlsx'
import Header from './Header';

const Results = () => {

    const [fileName, setFileName] = useState(null)
    const [data, setData] =useState([])

    const handleFile = async (e) => {
        const file = e.target.files[0]
        const fileName = file.name
        setFileName(fileName)

        const uploadDate = new Date().toISOString()

        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(worksheet)
        setData(jsonData)

        const filePaylaod = {
            fileName: fileName,
            products: jsonData,
            uploadDate: new Date()
        }

        try {
            const response = await fetch('http://localhost:5002/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(filePaylaod)
            })

            if (response.ok) {
                console.log('Data successfully sent to backend');
            } else {
                console.log('Failed to send data to backend');
            }

        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
        
        
    }
    console.log(`this is data ${data}`)

const greenArray = [];
const orangeArray = [];
const redArray = [];
const duplicateArray = []

const lowQuantityThreshold = 4
const lowUsageThreshold = 2
const lowMovementThreshold = 10
const moderateMovementThreshold = 50

const groupedItems = {}

for (let i = 0; i < data.length; i++) {
    const productCode = data[i].PPROD
    const item = data[i]

    if (!groupedItems[productCode]) {
        groupedItems[productCode] = []
    }
    groupedItems[productCode].push(item)
}

for (const productCode in groupedItems) {
    const items = groupedItems[productCode]

    if (items.length === 1) {
        const onHand = items[0].PONHND || 0
        const usage = items[0].PUSAGE || 0
        const movement = items[0].PMVMNT || 0
    
        
        const normalizedMovement = (usage / (onHand || 1)) * 100
        const isLowQuantity = onHand <= lowQuantityThreshold
        const isLowUsage = usage <= lowUsageThreshold
        
        if (isLowQuantity && isLowUsage) {
            redArray.push(items[0])
        } else if (normalizedMovement < lowMovementThreshold) {
            redArray.push(items[0])
        } else if (normalizedMovement >= lowMovementThreshold && normalizedMovement < moderateMovementThreshold) {
            orangeArray.push(items[0])
        } else {
            greenArray.push(items[0])
        }
        continue;
    }

    
    let duplicateItem = items[0]; 

    for (let i = 1; i < items.length; i++) {
        if (items[i].PUSAGE < duplicateItem.PUSAGE) {
            duplicateItem = items[i]
        }
    }

    
    duplicateArray.push(duplicateItem)

    
    for (let i = 0; i < items.length; i++) {
        if (items[i] === duplicateItem) continue

        const onHand = items[i].PONHND || 0
        const usage = items[i].PUSAGE || 0
        const movement = items[i].PMVMNT || 0

        const normalizedMovement = (usage / (onHand || 1)) * 100;
        const isLowQuantity = onHand <= lowQuantityThreshold;
        const isLowUsage = usage <= lowUsageThreshold

        if (isLowQuantity && isLowUsage) {
            redArray.push(items[i])
        } else if (normalizedMovement < lowMovementThreshold) {
            redArray.push(items[i])
        } else if (normalizedMovement >= lowMovementThreshold && normalizedMovement < moderateMovementThreshold) {
            orangeArray.push(items[i])
        } else {
            greenArray.push(items[i])
        }
    }
}


console.log('Green List:', greenArray)
console.log('Orange List:', orangeArray)
console.log('Red List:', redArray)
console.log('duplicate list:', duplicateArray)


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
                    <ParnameNumberContainer>
                        <RedParName>{paritem.PPDESC}</RedParName>
                        <RedParItem>{paritem.PPROD}</RedParItem>
                    </ParnameNumberContainer>
                    <RedParItemNum>{paritem.PONHND}<Description>On Hand</Description></RedParItemNum>
                    <RedParItemTurnNumber>{paritem.PMVMNT}<Description>Movement</Description></RedParItemTurnNumber>
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
                    <ParnameNumberContainer>
                        <OrangeParName>{paritem.PPDESC}</OrangeParName>
                        <OrangeParItem>{paritem.PPROD}</OrangeParItem>
                    </ParnameNumberContainer>
                    <OrangeParItemNum>{paritem.PONHND}<Description>On Hand</Description></OrangeParItemNum>
                    <OrangeParItemTurnNumber>{paritem.PMVMNT}<Description>Movement</Description></OrangeParItemTurnNumber>
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
                    <ParnameNumberContainer>
                        <GreenParName>{paritem.PPDESC}</GreenParName>
                        <GreenParItem>{paritem.PPROD}</GreenParItem>
                    </ParnameNumberContainer>
                    <GreenParItemNum>{paritem.PONHND}<Description>On Hand</Description></GreenParItemNum>
                    <GreenParItemTurnNumber>{paritem.PMVMNT}<Description>Movement</Description></GreenParItemTurnNumber>
                    </ResultsHolder>
                )
            })}
    </ListContainer>}
    </PageContaier>

        
       </>
    );
};

export default Results;


// <ResultsHolder>
//                     <OrangeParName>{paritem.PPDESC}</OrangeParName>
//                     <OrangeParItem>{paritem.PPROD}</OrangeParItem>
//                     <OrangeParItemNum>{paritem.PUSAGE}</OrangeParItemNum>
//                     <OrangeParItemNum>{paritem.PONHND}</OrangeParItemNum>
//                     <OrangeParItemNum>{paritem.PMVMNT}</OrangeParItemNum>
//                     </ResultsHolder>