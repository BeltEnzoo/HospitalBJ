import { HistoriaContainer, HistoriaText, HistoriaImage } from "./HistoriaStyles";
import hospitalImage from "../assets/fondoubicacion.jpg"; // Asegúrate de tener una imagen en /assets

const Historia = () => {
  return (
    <HistoriaContainer>
      <h1>Nuestra Historia</h1>
      <HistoriaImage src={hospitalImage} alt="Hospital Eva Perón" />
      <HistoriaText>
        <p>El Hospital Eva Perón fue fundado en 1950 con el objetivo de brindar atención médica accesible para toda la comunidad...</p>
      </HistoriaText>
    </HistoriaContainer>
  );
};

export default Historia;
