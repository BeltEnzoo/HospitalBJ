// src/pages/CAPS.jsx
import React from "react";
import { capsData } from "../data/capsData";
import { CAPSContainer, Table, Th, Td, Title, Title2 } from "../pages/CAPSStyles";

const CAPS = () => {
  return (
    <CAPSContainer>
      <Title>Centros de Atención Primaria de la Salud (CAPS)</Title>
      {capsData.map((caps) => (
        <div key={caps.id}>
          <Title2>{caps.nombre}</Title2>
          <p><strong>Ubicación:</strong> {caps.ubicacion}</p>
          <p><strong>Dirección:</strong> {caps.direccion}</p>
          <p><strong>Enfermera:</strong> {caps.enfermera}</p>
          <p><strong>Celular:</strong> {caps.celular}</p>          
          <Table>
            <thead>
              <tr>
                <Th>Día</Th>
                <Th>Profesional</Th>
                <Th>Horario</Th>
                <Th>Especialidad</Th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(caps.calendario).map(([dia, info]) => (
                <tr key={dia}>
                  <Td>{dia.charAt(0).toUpperCase() + dia.slice(1)}</Td>
                  <Td>{info.profesional}</Td>
                  <Td>{info.horario}</Td>
                  <Td>{info.especialidad}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </CAPSContainer>
  );
};

export default CAPS;