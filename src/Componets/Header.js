import React, { useContext } from 'react';
import { TitleContainer, Title, Company, Logout } from './../Styles/Headerstyles';
import { HeaderContainer } from './../Styles/Containerstyles';
import AccountContext from './Context/AccountContext';


const Header = () => {

    const context = useContext(AccountContext)

    const {getsession, logout} = context

    const logOut = () => {
        logout()
        .then(data => {
            console.log("successfully logged out", data)
        })
        .catch(err => {
            console.log(err)
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