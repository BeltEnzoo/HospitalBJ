import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background-color: #f4f4f4;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
  width: 90%;
  max-width: 1000px;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #d91e18;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  max-width: 800px;
  text-align: justify;
`;

export const ValuesList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
`;

export const ValueItem = styled.li`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #333;
  padding: 0.5rem;
  background: #f8f8f8;
  border-left: 4px solid #d91e18;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
