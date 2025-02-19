import { HistoriaContainer, HistoriaText, HistoriaImage } from "./HistoriaStyles";
import hospitalImage from "../assets/fondoubicacion.jpg"; // Asegúrate de tener una imagen en /assets

const Historia = () => {
  return (
    <HistoriaContainer>
      <h1>Nuestra Historia</h1>
      <HistoriaImage src={hospitalImage} alt="Hospital Eva Perón" />
      <HistoriaText>
        <p>
          El 8 de abril de 1954, y con la presencia del entonces ministro de Salud Pública de la Provincia de Buenos Aires, Dr. Enrique Vattuone, fue inaugurado el edificio del Hospital Eva Perón. Una importantísima obra enmarcada en el Segundo Plan Quinquenal del Dr. Ramón Carrillo, ministro de Salud de la Nación, durante la presidencia de Juan Domingo Perón.
        </p>
      </HistoriaText>
    </HistoriaContainer>
  );
};

export default Historia;
