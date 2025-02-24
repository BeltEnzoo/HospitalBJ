import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize"; // Opcional, para estandarizar estilos entre navegadores

export const GlobalStyles = createGlobalStyle`
  ${normalize} // Normaliza estilos para evitar inconsistencias entre navegadores

  /* Importa la fuente de Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif; /* Aplica la fuente a todo el proyecto */
    background-color: #f9f9f9; /* Ajusta según tu paleta */
    color: #333; /* Ajusta según el diseño */
  }
`;
