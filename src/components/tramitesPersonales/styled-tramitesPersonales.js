import styled from "styled-components";

export const ConteinerTramitesPersonales = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px 20px;
  background-color: #f4f4f4;
`;

export const TitleTramitesPersonales = styled.h1`
  color: #333;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 3px solid #007bb5;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const DescripcionTramitesPersonales = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  width: 100%;
  max-width: 1100px;
`;

export const CardTramitesPersonales = styled.div`
  background: #fff;
  width: 280px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  width: 120px; /* Se aumentó el tamaño */
  height: 240px; /* Se aumentó el tamaño */
  margin-bottom: 15px;
  transition: transform 0.3s ease;

  ${CardTramitesPersonales}:hover & {
    transform: scale(1.05);
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 8px;
`;

export const TitleLink = styled.a`
  text-decoration: none;
  color:black;
  font-weight: bold;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #b31212;
    text-decoration: underline;
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* Se aumentó el espacio entre imágenes */
  margin-top: 20px;
  width: auto;
  justify-content: center;

  img {
    width: 400px; /* Aumento en el tamaño de las imágenes */
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1); /* Mayor efecto de escala al pasar el cursor */
    }
  }
`;
