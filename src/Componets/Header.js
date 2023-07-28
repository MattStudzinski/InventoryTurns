import React from 'react';
import { TitleContainer, Title, Company } from './../Styles/Headerstyles';
import { HeaderContainer } from './../Styles/Containerstyles';
const Header = () => {
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
        
        </HeaderContainer>
    );
};

export default Header;