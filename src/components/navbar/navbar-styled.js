import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #007bb5; /* Cambié el rojo por un azul institucional */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 70px; /* Ajusta el tamaño según necesites */
  width: auto; /* Mantiene la proporción */
  cursor: pointer;

  @media (max-width: 768px) {
    height: 50px; /* Reduce el tamaño en pantallas pequeñas */
  }
`;

export const Nav = styled.nav`
  background-color: #007bb5; /* Azul institucional */
  padding: 12px 20px;
  border-radius: 5px;
  display: flex;
  gap: 30px;
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif; /* Cambié la fuente a Roboto */

  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600; /* Peso de fuente más sutil */
    font-size: 1rem;
    transition: color 0.3s ease, text-decoration 0.3s ease;
  }

  a:hover {
    color: #f0f0f0; /* Color más suave al pasar el mouse */
    text-decoration: underline; /* Agregar subrayado */
    text-decoration-color: #f0f0f0; /* Subrayado del color del texto */
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    width: 100%;
    text-align: center;
    transition: 0.3s ease;

    &.open {
      display: flex; /* Mostrar el menú cuando está abierto */
    }
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px; /* Asegurando que esté alineado con el logo */
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: #007bb5; /* Cambié el color del icono a azul institucional */
  margin: 6px 0;
  transition: 0.3s;
  position: relative;

  &::before, &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #007bb5; /* Cambié el color del icono a azul institucional */
    transition: 0.3s;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }

  &.open {
    background-color: transparent;

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
