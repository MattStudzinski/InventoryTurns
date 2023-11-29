import styled from 'styled-components';

export const TitleContainer = styled.div `

display: flex;
margin-top: auto;
padding: 10px 5px 10px 30px;
height: 60px;
`

export const Title = styled.p`
font-size: 22px;
color: white;
`

export const Company = styled.p`
color: white;
margin-left: auto;
margin-top: 0;
padding-right: 20px;
font-size: 15px;
`

export const Logout = styled.label`
display: flex;
align-self:flex-end;
margin-right: 10px;
margin-bottom: 8px;
background: #FF416C;  
background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C); 
background: linear-gradient(to right, #FF4B2B, #FF416C); 
color: white;
display: flex;
align-items: center;
justify-content: center;
height: 90px;
width: 5%;
max-width: 100px;
border-radius: 30px;
cursor: pointer;
&:hover {
        background: grey;
    }


`