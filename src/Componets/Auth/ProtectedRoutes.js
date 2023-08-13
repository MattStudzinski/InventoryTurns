import React, {useContext} from 'react';
import AccountContext from '../Context/AccountContext';
import Login from './Login';
import Results from '../Results'



    const {authenticate} = useContext(AccountContext)

    const protectedRoute = () => {
        const auth = authenticate()
        return auth ? <Results/> : <Login/>
    }



export default protectedRoute;