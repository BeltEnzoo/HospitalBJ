import React, { useState } from "react";
import { HeaderWrapper, Nav, Logo, HamburgerMenu, MenuIcon } from "./navbar-styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderWrapper>
      <Logo>
        <h1>
          Hospital <span>Eva Perón</span>
        </h1>
      </Logo>
      <Nav className={menuOpen ? "open" : ""}>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/historia">Historia</Link>
      </Nav>
      <HamburgerMenu onClick={toggleMenu}>
        <MenuIcon className={menuOpen ? "open" : ""}></MenuIcon>
      </HamburgerMenu>
    </HeaderWrapper>
  );
};

export default Navbar;
