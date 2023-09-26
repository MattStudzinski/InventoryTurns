import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import AccountContext from '../Context/AccountContext';
import Header from '../Header';


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
        <form>
            <label htmlFor='name'>name</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username'></input>
            
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password'></input>

            <button type='submit' onClick={handleLogin}>Login</button>
        
        </form>  
        {loggedin && (
            <Link to='/AddUser'>Admin</Link>
        )}
        </>
    );
};


export default Login;