import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e61c1c;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  h1 {
    font-family: 'Arial', sans-serif;
    font-size: 1.8rem;
    color: black;
    margin: 0;
    span {
      color: #e61c1c;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      padding-left: 35px;

    }
  }
`;

export const Nav = styled.nav`
  background-color: #e61c1c;
  padding: 12px 20px;
  border-radius: 5px;
  display: flex;
  gap: 30px;
  transition: all 0.3s ease;
  
  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #f0f0f0;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    width: 100%;
    
    &.open {
      display: flex;
    }
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 20px; /* Asegurando que esté alineado con el logo */
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: #e61c1c;
  margin: 6px 0;
  transition: 0.3s;
  position: relative;

  /* Las líneas del icono */
  &::before, &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #e61c1c;
    transition: 0.3s;
  }

  &::before {
    top: -10px; /* Línea superior */
  }

  &::after {
    top: 10px; /* Línea inferior */
  }

  &.open {
    background-color: transparent;

    /* Girar las líneas para mostrar el "X" */
    &::before {
      transform: rotate(45deg);
      top: 0;
    }

    &::after {
      transform: rotate(-45deg);
      top: 0;
    }
  }
`;

