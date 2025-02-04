import React from 'react'
import { CityAbout, ConteinerAbout, ConteinerDatos, ConteinerImg, ImagenBienvenida, TextDescription, Title2About, TitleAbout } from './styled-about'
import Comunication from './Comunication';
import img from './imgAbout/fondo_body_2.jpg'
import img2 from './imgAbout/bienvenidosfondo.jpg'

const About = () => {
    return (
        <>
            <ConteinerAbout>
                <ConteinerDatos>
                    <TitleAbout>¡Bienvenidos!</TitleAbout>
                    <Title2About>Ente descentralizado Dr.A Saintout</Title2About>
                    <CityAbout>Benito Juarez - Provincia de Buenos Aires</CityAbout>
                </ConteinerDatos>
                <ConteinerImg>
                    <ImagenBienvenida src={img}></ImagenBienvenida>
                    <ImagenBienvenida src={img2}></ImagenBienvenida>
                </ConteinerImg>
                <TextDescription>
                    70 años de trayectoria en nuestra comunidad
                </TextDescription>
            </ConteinerAbout>
            <Comunication />
        </>
    )
};

export default About;
