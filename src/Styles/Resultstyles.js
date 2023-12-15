import styled from 'styled-components'

export const ListContainer = styled.div`

width: 100%;
max-width: 75%;
padding-left: 0px;
margin-bottom: 6%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border: solid 1px rgba( 0, 0, 0, .3) ;
box-shadow: 2px 2px 5px rgba (200,200,200, .2);
border-radius: 10px;
@media (max-width: 500px) {
    width: 90%;
    max-width: 100%;
    
    
}
`

export const ResultsHolder = styled.div`
display: flex;
width: 90%;
margin: 15px;
display: flex;
align-items: center;
background-color: rgba(200,200,200, .3);
padding: 10px;
border-radius: 20px;
@media (max-width:500px) {
    width: 98%;
    padding: 1px;
}
@media (max-width:900px) {
    width: 98%;
    padding: 1px;
}
`

export const TitleOfResults = styled.div`
margin-top: 40px;
margin-bottom: 10px;
margin-right: 18%;
font-size: 17px;
`


export const GreenParItem = styled.div`
padding: 5px;
width: 50px;
color: green;
@media (max-width: 500px){
    width: 1px;
    font-size: 12px;
    margin-left: -10px;
    visibility: hidden;
}
@media (max-width: 900px){
    width: 1px;
    font-size: 12px;
    margin-left: -10px;
    
}
`
export const GreenParName = styled.div`
padding: 5px;
width: 30%;
color: green;
@media (max-width: 500px){
    width: 95px;
}
@media (max-width: 900px){
    width: 95px;
}
`
export const GreenParBy = styled.div`
padding: 5px;
width: 50px;
color: green;
@media (max-width: 500px){
    width: 35px;
}
@media (max-width: 900px){
    width: 35px;
}
`
export const GreenParItemNum = styled.div `
padding:5px;
width: 1%;
margin-right: auto;
position: relative;
left: 7%;
color: green;
@media (max-width: 500px){
    width: 70px;
    left: 0;
    margin-right: -10px;
}
`






export const OrangeParItem = styled.div`
padding: 5px;
width: 50px;
color: orange;
@media (max-width: 500px){
    width: 1px;
    font-size: 12px;
    margin-left: -10px;
    visibility: hidden;
}
@media (max-width: 900px){
    width: 1px;
    font-size: 12px;
    margin-left: -10px;
    
}
`
export const OrangeParName = styled.div`
padding: 5px;
width: 30%;
color: orange;
@media (max-width: 500px){
    width: 95px;
}
@media (max-width: 900px){
    width: 95px;
}
`
export const OrangeParBy = styled.div`
padding: 5px;
width: 50px;
color: orange;
@media (max-width: 500px){
    width: 35px;
}
@media (max-width: 900px){
    width: 35px;
}
`
export const OrangeParItemNum = styled.div `
padding:5px;
width: 1%;
margin-right: auto;
position: relative;
left: 7%;
color: orange;
@media (max-width: 500px){
    width: 70px;
    left: 0;
    margin-right: -10px;
}
`








export const RedParItem = styled.div`
padding: 5px;
width: 50px;
color: red;

@media (max-width: 500px){
    width: 1px;
    font-size: 12px;
    margin-left: -10px;
    visibility: hidden;
}
@media (max-width: 900px){
    width: 1px;
    font-size: 12px;
    margin-left: -10px;
    
}
`

export const RedParName = styled.div`
padding: 5px;
width: 30%;
color: red;
@media (max-width: 500px){
    width: 95px;
}
@media (max-width: 900px){
    width: 95px;
}
`

export const RedParBy = styled.div`
padding: 5px;
width: 50px;
color: red;
@media (max-width: 500px){
    width: 35px;
}
@media (max-width: 500px){
    width: 35px;
}
`
export const RedParItemNum = styled.div `
padding:5px;
width: 1%;
margin-right: auto;
position: relative;
left: 7%;
color: red;
@media (max-width: 500px){
    width: 70px;
    left: 0;
    margin-right: -10px;
}

`


