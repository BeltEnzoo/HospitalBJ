import { Container, Form, Input, TextArea, Button, SocialIcons, SocialIcon } from "./ContactoStyles";
import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Asegúrate de instalar react-icons

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://formspree.io/f/mbldwvkj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("¡Mensaje enviado con éxito!");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión.");
    }
  };
  

  return (
    <Container>
      <h1>Contacto</h1>
      <p><strong>Dirección:</strong> Labriola 272, Benito Juarez</p>
      <p><strong>Teléfono:</strong> +54 2281 - xxxxxx</p>
      <p><strong>Email:</strong> administracion@hospital.com</p>

      <h2>Envíanos un mensaje</h2>
      <Form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          name="nombre" 
          placeholder="Tu nombre" 
          value={formData.nombre}
          onChange={handleChange}
          required 
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="Tu correo" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <TextArea 
          name="mensaje" 
          placeholder="Tu mensaje" 
          value={formData.mensaje}
          onChange={handleChange}
          required 
        />
        <Button type="submit">Enviar</Button>
      </Form>

      <h2>Conéctanos en Redes Sociales</h2>
      <SocialIcons>
        <SocialIcon href="https://wa.me/541112345678" target="_blank">
          <FaWhatsapp size={30} />
        </SocialIcon>
        <SocialIcon href="https://instagram.com/hospitalevaperonbj" target="_blank">
          <FaInstagram size={30} />
        </SocialIcon>
        <SocialIcon href="https://facebook.com/hospital" target="_blank">
          <FaFacebook size={30} />
        </SocialIcon>
      </SocialIcons>
    </Container>
  );
};

export default Contacto;
