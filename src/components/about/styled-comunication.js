import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  text-align: center; 
  justify-content: space-around; /* Centra los elementos en pantallas pequeñas */
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  width: 100%;
  background-color: #f9f9f9;
  gap: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 1024px) {
    margin: 10px 30px;
  }

  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover; /* Asegura que la imagen se recorte bien en el contenedor */
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 16px; /* Ajusta el tamaño de la fuente en pantallas más pequeñas */
  }
`;

export const PhoneNumber = styled.p`
  margin: 5px 0 0;
  font-size: 16px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 14px; /* Ajusta el tamaño de la fuente en pantallas más pequeñas */
  }
`;
