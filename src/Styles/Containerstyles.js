import styled from 'styled-components'

export const PageContaier = styled.div`
height:100%;
  width:100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const HeaderContainer = styled.div`
display: flex;
flex-direction: column;
box-shadow: 2px 5px 10px 10px rgba(0, 0, 0, .3);
background: #606c88;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height:110px ;
`
export const InputContainer = styled.div`
margin-top: 100px;
display: flex;
justify-content: center;
`

export const FileNameContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
font-size: 20px;
`

export const ResultsTitleContainer = styled.div`
width: 100%;
margin-left: 10%;
display: flex;
flex-direction: column;
justify-content: flex-start;
`

