import styled from "styled-components";

export const FormContainer = styled.div`
display: flex;
margin-top: 10%;
`

export const FormStyle = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 300px;
width: 250px;
background: hsl(218deg 50% 92%);
margin: auto;
`

export const InputForm = styled.input`
background: hsl(0deg 0% 100%);
		box-shadow: 0 0 2em hsl(231deg 62% 94%);
		padding: 1em;
        margin: 50px;
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		border-radius: 20px;
		color: hsl(0deg 0% 30%);
		margin-top: -3em;
`

export const LabelForm = styled.label`

`
export const ButtonForm = styled.button`
    padding: 1em;
	background: hsl(233deg 36% 38%);
	color: hsl(0 0 100);
	border: none;
	border-radius: 30px;
	font-weight: 600;
`