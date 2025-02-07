import React from "react";
import { autoridades } from "../../data/autoridades";
import { AutoridadesContainer, Tarjeta } from "./AutoridadesStyles";

const Autoridades = () => {
  return (
    <AutoridadesContainer>
      {autoridades.map((item) => (
        <Tarjeta key={item.id}>
          <div className="icon">{item.icono}</div>
          <div className="cargo">{item.cargo}</div>
          <div className="nombre">{item.nombre}</div>
        </Tarjeta>
      ))}
    </AutoridadesContainer>
  );
};

export default Autoridades;
