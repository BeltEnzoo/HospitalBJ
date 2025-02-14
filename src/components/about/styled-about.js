import styled from "styled-components";

export const AboutContainer = styled.section`
  width: auto;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px; /* Reduce gap on small screens */
  }
`;

export const TextSection = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #e61c1c;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 2.2rem; /* Slightly smaller font for tablet-sized screens */
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.6rem; /* Adjust size for smaller screens */
  }
`;

export const Location = styled.p`
  font-size: 1.2rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    max-width: 90%; /* Slightly adjust max width on tablets */
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
