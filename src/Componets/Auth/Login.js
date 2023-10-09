import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormContainer,BlueLine, FormStyle,FormTitle, InputForm,TextField, LabelForm, ButtonForm } from '../../Styles/Loginstyles';
import { useState, useContext, useEffect } from 'react';
import AccountContext from '../Context/AccountContext';
import Header from '../Header';
import { PageContaier } from '../../Styles/Containerstyles';



const Login = () => {

const navigate = useNavigate()
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const {authenticate, getSession, loggedin} = useContext(AccountContext)


useEffect(() => {
    getSession()
    .then(session => {
        console.log(session)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

const handleLogin = (event) => {
    event.preventDefault()
    authenticate(username,password)
    .then(data => {
        console.log("logged in siccessfully", data)
        navigate('/InventorySorter')
        console.log(loggedin)
        
        
    })
    .catch(err => {
        console.log("failed login", err.message)
    })
}


    return (

        <>
        <Header />
        <PageContaier>
        <FormContainer>
            <FormTitle>Login</FormTitle>
        <FormStyle>

            <TextField>
                <InputForm value={username} onChange={(e) => setUsername(e.target.value)} type='text' required></InputForm>
                <BlueLine></BlueLine>
                <LabelForm htmlFor='name'>name</LabelForm>
            </TextField>

            <TextField>
                <InputForm value={password} onChange={(e) => setPassword(e.target.value)} type='text' required></InputForm>
                <BlueLine></BlueLine>
                <LabelForm htmlFor='password'>Password</LabelForm>
            </TextField>

            <ButtonForm type='submit' onClick={handleLogin}>Login</ButtonForm>
        
        </FormStyle>  
        </FormContainer>
        </PageContaier>
        {loggedin && (
            <Link to='/AddUser'>Admin</Link>
        )}
        </>
    );
};


export default Login;