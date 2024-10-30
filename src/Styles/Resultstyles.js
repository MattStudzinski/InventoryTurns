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
display: flex;
width: 98%;
margin: .5rem;
height: 4.5rem;
box-shadow: .1rem .1rem  .5rem rgba(0,0,0,.4);
background-color: rgba(200,200,200, .3);

border-radius: 20px;
`

export const TitleOfResults = styled.div`
margin-top: 40px;
margin-bottom: 10px;
margin-right: 18%;
font-size: 17px;
`

export const ParnameNumberContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
width: 70%;
`

export const Description = styled.p `
margin: 0;
font-size: .5rem;
`


export const GreenParItem = styled.div`
margin-left: 15px;
color: grey;
`
export const GreenParName = styled.div`
margin: 0 0 2px 10px;
color: green;
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
grid-column: 3;
justify-self: center;
align-self: center;
color: green;
`

export const GreenParItemTurnNumber = styled.div`
padding:5px 10px;
color: green;
grid-column: 4;
justify-self: end;
align-self: center;
`






export const OrangeParItem = styled.div`
margin-left: 15px;
color: grey;
`
export const OrangeParName = styled.div`
margin: 0 0 2px 10px;
color: orange;
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
grid-column: 3;
justify-self: center;
align-self: center;
color: orange;
`

export const OrangeParItemTurnNumber = styled.div`
padding:5px;
color: orange;
grid-column: 4;
justify-self: center;
align-self: center;
`








export const RedParItem = styled.div`
margin-left: 15px;
color: grey;
`

export const RedParName = styled.div`
margin: 0 0 2px 10px;
color: red;
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
justify-self: center;
align-self: center;
width: 15%;
color: red;
margin-left: 10px;
`

export const RedParItemTurnNumber = styled.div`
padding:5px;
color: red;
grid-column: 4;
justify-self: center;
align-self: center;

`


export const DupParItem = styled.div`
margin-left: 15px;
color: black;
`

export const DupParName = styled.div`
margin: 0 0 2px 10px;
color: black;
`

export const DupParBy = styled.div`
padding: 5px;
width: 50px;
color: black;
@media (max-width: 500px){
    width: 35px;
}
@media (max-width: 500px){
    width: 35px;
}
`
export const DupParItemNum = styled.div `
justify-self: center;
align-self: center;
width: 15%;
color: black;
margin-left: 10px;
`

export const DupParItemTurnNumber = styled.div`
padding:5px;
color: black;
grid-column: 4;
justify-self: center;
align-self: center;

`