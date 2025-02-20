import styled from "styled-components";

export const ServiciosContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #f4f4f4;
  max-width: 1200px;
  margin: 0 auto;

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    justify-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Arial', sans-serif;
  color: #333;
  margin-bottom: 40px;
`;

export const ServicioCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  margin: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 100%;
  max-width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 0%;
  margin-bottom: 10px;
`;

export const Descripcion = styled.p`
  color: #555;
  font-size: 1rem;
  text-align: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
