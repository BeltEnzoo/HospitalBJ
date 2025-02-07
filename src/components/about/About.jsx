import React from "react";
import { 
  AboutContainer, 
  ContentWrapper, 
  TextSection, 
  Title, 
  Subtitle, 
  Location, 
  ImageContainer, 
  Image 
} from "./styled-about";
import hospitalImage from "./imgAbout/bienvenidosfondo.jpg";

const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <TextSection>
          <Title>¡Bienvenidos!</Title>
          <Subtitle>Ente descentralizado Dr. A Saintout</Subtitle>
          <Location>Benito Juárez - Provincia de Buenos Aires</Location>
        </TextSection>
        <ImageContainer>
          <Image src={hospitalImage} alt="Hospital Eva Perón" />
        </ImageContainer>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
