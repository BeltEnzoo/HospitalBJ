import React from 'react'
import { FooterWrapper, FooterContent, FooterLinks, FooterLink, SocialLinks, SocialIcon } from './styled-footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <FooterWrapper>
          <FooterContent>
            <p>&copy; 2025 Mi Sitio Web</p>
            <FooterLinks>
              <FooterLink href="/about">Acerca de</FooterLink>
              <FooterLink href="/contact">Contacto</FooterLink>
              <FooterLink href="/privacy">Política de Privacidad</FooterLink>
            </FooterLinks>
    
            <SocialLinks>
              <SocialIcon href="https://www.instagram.com" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </SocialIcon>
              <SocialIcon href="https://wa.me/" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} />
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialIcon>
            </SocialLinks>
          </FooterContent>
        </FooterWrapper>
      );
}

export default Footer
