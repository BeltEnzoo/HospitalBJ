import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterLinks = styled.div`
  margin-top: 10px;
`;

export const FooterLink = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  margin-top: 20px;
`;

export const SocialIcon = styled.a`
  color: white;
  margin: 0 15px;
  font-size: 24px;

  &:hover {
    color: #00aced; /* Cambia el color al pasar el mouse */
  }
`;