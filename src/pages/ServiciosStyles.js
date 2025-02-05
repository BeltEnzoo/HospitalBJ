import styled from "styled-components";

export const ServiciosContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const ServicioCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  background-color: #f8f8f8;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #e61c1c;
    color: white;
  }
`;

export const Descripcion = styled.p`
  margin-top: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  text-align: justify;
`;
