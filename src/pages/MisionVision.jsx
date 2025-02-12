import React from "react";
import { PageWrapper, Section, Title, Text, ValuesList,ValueItem } from "./MisionVision-styled";

const MisionVision = () => {
    return (
        <PageWrapper>
            <Section>
                <Title>Misión</Title>
                <Text>
                    Ser un Hospital de referencia, para  la  patología aguda  de  mediana complejidad,  en   adultos y   niños,  centrado en el eje, emergencias y trauma, así como en servicios clínicos –quirúrgicos enfocado en una atención de segundo nivel con sus subespecialidades.
                    Contribuir a mejorar el nivel de salud y la calidad de vida de la población a través de la prestación de servicios de salud, con criterios de equidad, gratuidad, accesibilidad, integralidad y calidad de atención, mediante acciones de promoción, prevención, recuperación y rehabilitación de la salud.
                </Text>
            </Section>
            <Section>
                <Title>Visión</Title>
                <Text>
                    Ser un Hospital con orientación General.

                    Centrar la organización en las necesidades de la población.

                    Mejorar la calidad de atención. Promoviendo el trabajo en equipo como pieza clave para insertar al Hospital en una red prestacional  de complejidad creciente dentro del sistema de salud provincial y nacional.

                    Propiciará la participación activa, crítica, propuestas y sugerencias, tanto de los ciudadanos/usuarios como de los trabajadores,  dentro del sistema de control de gestión.

                    Contará con una dirección con un estilo de conducción democrático, participativo, orientada al cumplimiento de los objetivos formulados en el Plan Estratégico Institucional, a la coordinación de actividades, a la creación de ámbitos de trabajo colectivos y a facilitar la comunicación interna y externa.
                </Text>
            </Section>
            <Section>
                <Title>Valores</Title>
                <ValuesList>
                    <ValueItem>Sentido de pertenencia.</ValueItem>
                    <ValueItem>Compromiso con la Salud Pública e Institucional.</ValueItem>
                    <ValueItem>Trabajo en equipo.</ValueItem>
                    <ValueItem>Participación.</ValueItem>
                    <ValueItem>Respeto mutuo.</ValueItem>
                    <ValueItem>Asistencia humanizada.</ValueItem>
                    <ValueItem>Ética, seriedad, fiabilidad, credibilidad y comunicación.</ValueItem>
                    <ValueItem>Conocimientos profesionales y tecnológicos con capacidad de superación e innovación.</ValueItem>
                    <ValueItem>Comunicación y solidaridad con compañeros y ciudadanos.</ValueItem>
                    <ValueItem>La calidad como instrumento para el logro de resultados.</ValueItem>
                    <ValueItem>Respeto al medio ambiente de trabajo.</ValueItem>
                </ValuesList>
            </Section>
        </PageWrapper >
    );
};

export default MisionVision;