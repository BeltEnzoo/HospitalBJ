import React, { useState, useEffect } from "react";
import { 
  AboutContainer, 
  ContentWrapper, 
  TextSection, 
  Title, 
  Subtitle, 
  Location, 
  ImageContainer 
} from "./styled-about";
import hospitalImage1 from "./imgAbout/bienvenidosfondo.jpg";
import hospitalImage2 from "./imgAbout/fondo_body_2.jpg";  // Puedes agregar más imágenes aquí

const About = () => {
  const [currentImage, setCurrentImage] = useState(hospitalImage1);

  // Cambia de imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => 
        prevImage === hospitalImage1 ? hospitalImage2 : hospitalImage1
      );
    }, 5000);

    return () => clearInterval(interval); // Limpiar intervalo cuando el componente se desmonte
  }, []);

  return (
    <AboutContainer>
      <ImageContainer image={currentImage} />
      <ContentWrapper>
        <TextSection>
          <Title>¡Bienvenidos!</Title>
          <Subtitle>Ente descentralizado Dr. A Saintout</Subtitle>
          <Location>Benito Juárez - Provincia de Buenos Aires</Location>
        </TextSection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
