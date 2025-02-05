import React from "react";
import { HeaderWrapper, Nav } from "./navbar-styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HeaderWrapper>
      <h1 style={{ color: "black" }}>
        Hospital <span style={{ color: "#e61c1c" }}>Eva Perón</span>
      </h1>
      <Nav>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/historia">Historia</Link>
      </Nav>
    </HeaderWrapper>
  );
};

export default Navbar;
