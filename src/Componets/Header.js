import React, { useContext } from 'react';
import { TitleContainer, Title, Company, Logout } from './../Styles/Headerstyles';
import { HeaderContainer } from './../Styles/Containerstyles';
import AccountContext from './Context/AccountContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const context = useContext(AccountContext)
    const navigate = useNavigate()

    const {getsession, logout} = context

    const logOut = () => {
        logout()
        .then(data => {
            console.log("successfully logged out", data)
            navigate('/')
            window.location.reload()
            
        })
        .catch(err => {
            console.log(err)
            navigate('/')
        })
    }

    
    return (
        <HeaderContainer>
        <TitleContainer>
        <Title>
            Inventory Turner
        </Title>
        
        <Company>
            The Everett Clinic
        </Company>
        
        </TitleContainer>
        <Logout onClick={logOut}>Logout</Logout>
        </HeaderContainer>
    );
};

export default Header;