import React, { useState } from "react";
import { HeaderWrapper, Nav, Logo, HamburgerMenu, MenuIcon } from "./navbar-styled";
import { Link } from "react-router-dom";
import ImgLogo from "../navbar/Logos/logo2.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState); // Mantén el estado correcto para mostrar/ocultar el menú
  };

  return (
    <HeaderWrapper>
      <Logo src={ImgLogo} alt="Logo del hospital" />
      
      {/* Enlaces de navegación */}
      <Nav className={menuOpen ? "open" : ""}>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/historia">Historia</Link>
        <Link to="/mision-vision">Misión / Visión</Link>
        <Link to="/caps">CAPS</Link>
      </Nav>

      {/* Menú hamburguesa */}
      <HamburgerMenu onClick={toggleMenu}>
        <MenuIcon className={menuOpen ? "open" : ""}></MenuIcon>
      </HamburgerMenu>
    </HeaderWrapper>
  );
};

export default Navbar;
