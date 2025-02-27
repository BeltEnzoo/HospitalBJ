import React from "react";
import { autoridades } from "../../data/autoridades";
import { AutoridadesContainer, Tarjeta, ImagenAutoridad } from "./AutoridadesStyles";

const Autoridades = () => {
  return (
    <AutoridadesContainer>
      {autoridades.map((item) => (
        <Tarjeta key={item.id}>
          <ImagenAutoridad src={item.imagen} alt={item.nombre} />
          <div className="cargo">{item.cargo}</div>
          <div className="nombre">{item.nombre}</div>
        </Tarjeta>
      ))}
    </AutoridadesContainer>
  );
};

export default Autoridades;
