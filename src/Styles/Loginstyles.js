import styled from "styled-components";

export const FormContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width:400px;
background-color: white;
border-radius: 10px;
`

export const FormStyle = styled.form`
padding: 0 40px;
box-sizing: border-box;
`

export const FormTitle = styled.h1`
text-align: center;
padding: 0 0 20px 0;
border-bottom: 1px solid silver;
`


export const InputForm = styled.input`
width: 100%;
padding: 0 5px;
height: 40px;
font-size: 16px;
border: none;
background: none;
outline: none;

`



export const LabelForm = styled.label`
position: absolute;
top: 50%;
left: 5px;
color: #adadad;
transform: translateY(-50%);
font-size: 16px;
pointer-events: none;
transition: .5s;
`

export const BlueLine = styled.span`

`

export const TextField = styled.div`
position: relative;
border-bottom: 2px solid #adadad;
margin: 30px 0;
${InputForm}:focus ~ ${LabelForm},
${InputForm}:valid ~ ${LabelForm} {
    top: -5px;
    color: #2691d9;
}
${InputForm}:focus ~ ${BlueLine}::before{
    width: 100%;
}
${InputForm}:valid ~ ${BlueLine}::before {
width: 100%;
}
${BlueLine}::before{
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #2691d9;
}
`



export const ButtonForm = styled.button`
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #2691d9;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    margin-bottom: 10px;
    &:hover {
        border-color: #2691d9;
        transition:.5s ;

    }
`