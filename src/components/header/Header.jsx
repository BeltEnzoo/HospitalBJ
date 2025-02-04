import React from 'react'
import { HeaderWrapper, Nav } from './header-styled'




const Header = () => {
    return (
        <HeaderWrapper>
            <h1 style={{ color: "black" }}>Hospital <span style={{ color:"#e61c1c" }}>Eva Peron</span></h1>
            <Nav>
                <a href="#">Inicio</a>
                <a href="#">Servicios</a>
                <a href="#">Contacto</a>
                <a href="#">Historia</a>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;