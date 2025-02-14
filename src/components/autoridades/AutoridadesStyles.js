import styled from "styled-components";

export const AutoridadesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px; /* Reduce el espacio entre tarjetas en pantallas más pequeñas */
  }
`;

export const Tarjeta = styled.div`
  background: #222;
  color: white;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  .icon {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .cargo {
    font-size: 1rem;
    font-weight: bold;
  }

  .nombre {
    position: absolute;
    bottom: 10px;
    font-size: 0.9rem;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    background: #e61c1c;

    .nombre {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px; /* Ajusta el tamaño de las tarjetas en pantallas más pequeñas */
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px; /* Ajusta aún más el tamaño de las tarjetas en pantallas muy pequeñas */
  }
`;
