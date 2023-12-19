import styled from 'styled-components'

export const ListContainer = styled.div`

width: 100%;
max-width: 75%;
padding-left: 0px;
margin-bottom: 30px;
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
display: grid;
padding: 5px;
width: 98%;
grid-template-columns: 40% 35% 25%;
grid-template-rows: 80px;
background-color: rgba(200,200,200, .3);
margin: 7px;
border-radius: 20px;
`

export const TitleOfResults = styled.div`
margin-top: 40px;
margin-bottom: 10px;
margin-right: 18%;
font-size: 17px;
`


export const GreenParItem = styled.div`
padding: 5px;

grid-column: 2;
color: green;
justify-self: center;
align-self: center;

`
export const GreenParName = styled.div`
padding: 5px;
justify-self: center;
align-self: center;
color: green;
grid-column: 1;
justify-self: stretch;

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

export const GreenParItemTurnNumber = styled.div`
padding:5px 10px;
color: green;
grid-column: 3;
justify-self: end;
align-self: center;


`






export const OrangeParItem = styled.div`
padding: 5px;
width: 50px;
grid-column: 2;
color: orange;
justify-self: center;
align-self: center;
`
export const OrangeParName = styled.div`
padding: 5px;
justify-self: center;
align-self: center;
color: orange;
grid-column: 1;
justify-self: stretch;

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

export const OrangeParItemTurnNumber = styled.div`
padding:5px;
color: orange;
grid-column: 3;
justify-self: center;
align-self: center;

`








export const RedParItem = styled.div`
padding: 5px;
width: 50px;
grid-column: 2;
color: red;
justify-self: center;
align-self: center;


`

export const RedParName = styled.div`
padding: 5px;
justify-self: center;
align-self: center;
color: red;
grid-column: 1;
justify-self: stretch;

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
    visibility: hidden;
    width: 70px;
    left: 0;
    margin-right: -10px;
}

`

export const RedParItemTurnNumber = styled.div`
padding:5px;
color: red;
grid-column: 3;
justify-self: center;
align-self: center;

`


