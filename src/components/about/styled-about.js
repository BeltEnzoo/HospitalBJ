import styled from "styled-components";

export const ConteinerAbout = styled.div`
height: auto;
text-align: center;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items:center;
margin-top: 10px;

`
export const ConteinerDatos = styled.div`
display: flex;
flex-direction: column;
border: 1px solid red;
padding: 5px;
`
export const ConteinerImg = styled.div`
  display: flex;
  gap: 20px;
  `;
export const ImagenBienvenida = styled.img`
  width: 100%;
  max-width: 550px;  /* Tamaño máximo */
  height: auto;
  `;

export const TextDescription = styled.p`
font-size: 20px;
font-weight: 700;
`;

export const TitleAbout = styled.h1`
color: black;
font-size: 40px;
`
export const Title2About = styled.h2`
color: black;
font-size: 25px;
`
export const CityAbout = styled.p`
color: black;
font-size: 25px;
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  text-align: center;
  margin-top: 50px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 150px;
  padding: 0px;
  width: 100%;
  background-color: #f9f9f9;
  gap: 10px;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 0%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const PhoneNumber = styled.p`
  margin: 5px 0 0;
  font-size: 16px;
  color: #555;
`;