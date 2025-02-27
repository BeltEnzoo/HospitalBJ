import styled from "styled-components";

export const AutoridadesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;
  width: auto;
  /* max-width: 1200px; */
  margin: auto;

  @media (max-width: 768px) {
    display: grid ;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    display: grid ;
    grid-template-columns: 1fr 1fr;
  }
`;
export const ImagenAutoridad = styled.img`
  width: 80px;  // Ajusta el tamaño de la imagen según necesidad
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const Tarjeta = styled.div`
  background:rgb(185, 181, 181);
  color: #333;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  cursor: pointer;
  padding: 20px;
  text-align: center;

  .icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #e61c1c;
  }

  .cargo {
    font-size: 1.1rem;
    font-weight: bold;
    color: #444;
    margin-bottom: 8px;
  }

  .nombre {
    font-size: 1rem;
    color: #777;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: white;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 130px;
    height: 180px;
  }
`;
