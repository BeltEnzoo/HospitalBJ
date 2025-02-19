import styled from "styled-components";

export const AboutContainer = styled.section`
  width: auto;
  height: 500px;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;
  z-index: 1; /* Asegura que el texto esté por encima de las imágenes */

  @media (max-width: 1024px) {
    gap: 25px;
  }
`;

export const TextSection = styled.div`
  text-align: center;
  z-index: 2; /* Asegura que el texto esté por encima */
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  color: #fff; /* Color blanco para contrastar con el fondo */
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para mejorar visibilidad */

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Location = styled.p`
  font-size: 1.2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  filter: brightness(50%); /* Oscurecer un poco la imagen para que el texto sea más legible */
  z-index: 1;
  transition: background-image 1s ease-in-out;

  /* Efecto de parallax si decides hacer que cambien las imágenes */
  &:hover {
    filter: brightness(60%);
  }
`;

