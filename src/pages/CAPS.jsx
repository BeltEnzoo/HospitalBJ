import React, { useState } from "react";
import { capsData } from "../data/capsData";
import { CAPSContainer, Table, Th, Td, Title, Title2, Input } from "../pages/CAPSStyles";

const CAPS = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Maneja la búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <CAPSContainer>
      <Title>Centros de Atención Primaria de la Salud (CAPS)</Title>
      
      {/* 🔎 Input de búsqueda */}
      <Input 
        type="text" 
        placeholder="Buscar por profesional o especialidad..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />

      {capsData.map((caps) => {
        // Filtrar el CAPS según la búsqueda
        const matchingProfesionales = caps.profesionales.filter(({ nombre, especialidad }) => 
          nombre.toLowerCase().includes(searchTerm) || especialidad.toLowerCase().includes(searchTerm)
        );
        
        if (
          !caps.nombre.toLowerCase().includes(searchTerm) &&
          !caps.ubicacion.toLowerCase().includes(searchTerm) &&
          !caps.direccion.toLowerCase().includes(searchTerm) &&
          matchingProfesionales.length === 0 // Si no hay profesionales que coincidan con la búsqueda
        ) {
          return null;
        }

        return (
          <div key={caps.id}>
            <Title2>{caps.nombre}</Title2>
            <p><strong>Ubicación:</strong> {caps.ubicacion}</p>
            <p><strong>Dirección:</strong> {caps.direccion}</p>
            <p><strong>Enfermera:</strong> {caps.enfermera}</p>
            <p><strong>Celular:</strong> {caps.celular}</p>          

            {/* Mostrar la tabla de profesionales solo si hay algún profesional que coincida */}
            {matchingProfesionales.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <Th>Profesional</Th>
                    <Th>Especialidad</Th>
                  </tr>
                </thead>
                <tbody>
                  {matchingProfesionales.map(({ nombre, especialidad }) => (
                    <tr key={nombre}>
                      <Td>{nombre}</Td>
                      <Td>{especialidad}</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        );
      })}
    </CAPSContainer>
  );
};

export default CAPS;
