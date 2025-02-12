import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  width: 80%;
  max-width: 800px;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: #e61c1c;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;

export const ValuesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ValueItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
`;
