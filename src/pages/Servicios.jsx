import React, { useState } from "react";
import { ServiciosContainer, Title, ServicioCard, Image, Descripcion } from "./ServiciosStyles";
import { servicios } from "../data/servicios.js";

const Servicios = () => {
  const [servicioActivo, setServicioActivo] = useState(null);

  const toggleDescripcion = (id) => {
    setServicioActivo(servicioActivo === id ? null : id);
  };

  return (
    <ServiciosContainer>
      <Title>Nuestros Servicios</Title>
      <div className="services-grid">
        {servicios.map((servicio) => (
          <ServicioCard key={servicio.id} onClick={() => toggleDescripcion(servicio.id)}>
            <Image src={servicio.imagen} alt={servicio.nombre} />
            <h2>{servicio.nombre}</h2>
            {servicioActivo === servicio.id && <Descripcion>{servicio.descripcion}</Descripcion>}
          </ServicioCard>
        ))}
      </div>
    </ServiciosContainer>

  );
};

export default Servicios;
