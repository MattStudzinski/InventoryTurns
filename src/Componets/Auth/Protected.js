import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AccountContext from '../Context/AccountContext';

import Login from './Login';

const Protected = () => {

    const {loggedin} = useContext(AccountContext)
    return (
       loggedin ? <Outlet /> : <Login />
    );
    
};


export default Protected;