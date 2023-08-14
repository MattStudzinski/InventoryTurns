import React, { useContext, useEffect, useState } from 'react';
import AccountContext from '../Context/AccountContext';
import Header from '../Header';

const SignUp = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const {signUp} = useContext(AccountContext)

const handleSignUp = (e) => {
    e.preventDefault()
    signUp(username, password)
    .then(data => {
        console.log("registered", data)
    })
    .catch(err => {
        console.log("failed to register", err)
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

            <button type='submit' onClick={handleSignUp}></button>
        </form>  
        </>
    );
};

export default SignUp;