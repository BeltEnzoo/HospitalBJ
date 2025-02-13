// components/lastNews/LastNewsStyles.js
import styled from 'styled-components';

export const Container = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);  // Para pantallas medianas
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;  // Para pantallas pequeñas
  }
`;
