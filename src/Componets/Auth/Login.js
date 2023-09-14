import React from 'react';
import { Link, useNavigate, redirect } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import AccountContext from '../Context/AccountContext';
import Header from '../Header';


const Login = () => {

const navigate = useNavigate()
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [loggedin, setLoggedIn] = useState("")
const {authenticate, getSession} = useContext(AccountContext)


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
        setLoggedIn(data)
        
        
    })
    .catch(err => {
        console.log("failed login", err.message)
    })
}


    return (

        <>
        <Header />
        <form>
            <label htmlFor='name'>name</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username'></input>
            
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password'></input>

            <button type='submit' onClick={handleLogin}>Login</button>
        
        </form>  
        {authenticate.user && (
            <Link to='/AddUser'>Admin</Link>
        )}
    
        </>
    );
};


export default Login;