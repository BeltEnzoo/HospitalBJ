import styled from "styled-components";

export const ConteinerTramitesPersonales = styled.div`
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin: 0px;
  padding: 0 20px; /* Añadido padding para evitar que el contenido se pegue a los bordes en pantallas pequeñas */
`;

export const TitleTramitesPersonales = styled.h1`
  color: white;
  background-color: green;
  padding: 10px;
  border-radius: 5px;
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px; /* Reduce los márgenes en pantallas pequeñas */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Ajusta el tamaño de la fuente en pantallas pequeñas */
  }
`;

export const DescripcionTramitesPersonales = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 30px 0px;
  text-align: center;
  flex-wrap: wrap; /* Permite que los elementos se ajusten en filas cuando la pantalla es pequeña */
`;

export const CardTramitesPersonales = styled.div`
  height: auto;
  width: auto;
  max-width: 250px; /* Limita el ancho de las tarjetas en pantallas grandes */
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 90%; /* Ajusta el ancho de las tarjetas en pantallas más pequeñas */
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 18px; /* Ajusta el tamaño de la fuente en pantallas más pequeñas */
  }
`;

export const TitleLink = styled.a`
  text-decoration: none;
  color: #333;

  &:hover {
    color: green;
  }
`;
