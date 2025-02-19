import styled from "styled-components";

export const ConteinerTramitesPersonales = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px 20px;
  background-color: #f8f9fa;
`;

export const TitleTramitesPersonales = styled.h1`
  color: #2c3e50;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 4px solid #007bb5;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const DescripcionTramitesPersonales = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  width: 100%;
  max-width: 1100px;
`;

export const CardTramitesPersonales = styled.div`
  background: #ffffff;
  width: 280px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    /* border-color: #e74c3c; */
  }
`;

export const Image = styled.img`
  width: 90px;
  height: 180px
  /* border-radius:50%; */
  margin-bottom: 15px;
  /* border: 4px solid  #007bb5; */
  transition: transform 0.3s ease;

  ${CardTramitesPersonales}:hover & {
    transform: scale(1.08);
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  color: #34495e;
  margin-bottom: 8px;
`;

export const TitleLink = styled.a`
  text-decoration: none;
  color: #e74c3c;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #c0392b;
    text-decoration: underline;
  }
`;
