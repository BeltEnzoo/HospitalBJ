import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FloatingButton } from "../iconoWhatsApp/styled-iconoWhatsApp";

const WhatsAppButton = () => {
  const phoneNumber = "2281369943"; // Reemplaza con el número real

  return (
    <FloatingButton
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </FloatingButton>
  );
};

export default WhatsAppButton;
