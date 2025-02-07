import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e61c1c;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

    &.open {
      display: flex;
    }
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

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

  &.open {
    transform: rotate(45deg);
    background-color: #000;
  }

  &.open::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #000;
    transform: rotate(90deg);
    top: 0;
    left: 0;
  }

  &.open::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #000;
    transform: rotate(90deg);
    top: 0;
    left: 0;
  }
`;
