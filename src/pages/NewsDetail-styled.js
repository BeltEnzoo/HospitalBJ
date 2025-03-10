import styled from 'styled-components';

export const NewsWrapper = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const Image = styled.img`
width: 50%;
max-width: 600px;  /* Limita el tamaño máximo de la imagen */
height: auto;
margin: 0 auto 20px;  /* Centra la imagen y añade margen en la parte inferior */
display: block;  /* Asegura que la imagen se comporte como un bloque */
border-radius: 8px;

@media (max-width: 768px) {
  width: 100%;
  height: auto;
}
`;

export const ContentWrapper = styled.div`
  font-size: 1.2em;
  line-height: 1.6;
  color: #555;
  text-align: justify;

  p {
    margin-bottom: 15px; /* Añadimos margen entre párrafos */
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
