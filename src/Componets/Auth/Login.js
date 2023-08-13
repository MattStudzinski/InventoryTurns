import React, { useContext, useEffect, useState } from 'react';
import AccountContext from '../Context/AccountContext';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {authenticate, getSession} = useContext(AccountContext)


    useEffect(() => {
        getSession()
        .then(session => {
            console.log(session, "hello")
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

const handleLogin = (e) => {
    e.preventDefault()
    authenticate(username,password)
    .then(data => {
        console.log("logged in Successfully", data)
    })
    .catch(err=> {
        console.log("failed to login", err.message)
    })
}

    return (
        <>
        <form>
            <label htmlFor='usernname'>Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username'></input>
            
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder='Password'></input>

            <button type='button' onClick={handleLogin}></button>
        </form>  
        </>
    );
};

export default Login;