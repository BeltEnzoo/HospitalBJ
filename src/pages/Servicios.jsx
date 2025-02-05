import React, { useState } from "react";
import { ServiciosContainer, ServicioCard, Descripcion } from "./ServiciosStyles";
import { servicios } from "../data/servicios.js";

const Servicios = () => {
  const [servicioActivo, setServicioActivo] = useState(null);

  const toggleDescripcion = (id) => {
    setServicioActivo(servicioActivo === id ? null : id);
  };

  return (
    <ServiciosContainer>
      <h1>Nuestros Servicios</h1>
      {servicios.map((servicio) => (
        <ServicioCard key={servicio.id} onClick={() => toggleDescripcion(servicio.id)}>
          <h2>{servicio.nombre}</h2>
          {servicioActivo === servicio.id && <Descripcion>{servicio.descripcion}</Descripcion>}
        </ServicioCard>
      ))}
    </ServiciosContainer>
  );
};

export default Servicios;
