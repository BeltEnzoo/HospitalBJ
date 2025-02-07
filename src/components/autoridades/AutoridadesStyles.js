import styled from "styled-components";

export const AutoridadesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
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
`;
