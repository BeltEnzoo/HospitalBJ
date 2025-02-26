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
        placeholder="Buscar por profesional, especialidad o CAPS..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />

      {capsData.map((caps) => {
        const profesionalesUnicos = new Map();

        Object.values(caps.calendario).forEach(({ profesional, especialidad }) => {
          if (profesional && especialidad) {
            profesionalesUnicos.set(profesional, especialidad);
          }
        });

        // Filtrar según la búsqueda
        const filteredProfessionals = [...profesionalesUnicos].filter(
          ([profesional, especialidad]) =>
            profesional.toLowerCase().includes(searchTerm) ||
            especialidad.toLowerCase().includes(searchTerm) ||
            caps.nombre.toLowerCase().includes(searchTerm)
        );

        // Si no hay coincidencias, no muestra el CAPS
        if (filteredProfessionals.length === 0) return null;

        return (
          <div key={caps.id}>
            <Title2>{caps.nombre}</Title2>
            <p><strong>Ubicación:</strong> {caps.ubicacion}</p>
            <p><strong>Dirección:</strong> {caps.direccion}</p>
            <p><strong>Enfermera:</strong> {caps.enfermera}</p>
            <p><strong>Celular:</strong> {caps.celular}</p>          
            <Table>
              <thead>
                <tr>
                  <Th>Profesional</Th>
                  <Th>Especialidad</Th>
                </tr>
              </thead>
              <tbody>
                {filteredProfessionals.map(([profesional, especialidad]) => (
                  <tr key={profesional}>
                    <Td>{profesional}</Td>
                    <Td>{especialidad}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        );
      })}
    </CAPSContainer>
  );
};

export default CAPS;
