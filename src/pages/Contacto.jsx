import { Container, Form, Input, TextArea, Button } from "./ContactoStyles";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensaje enviado:", formData);
    alert("¡Tu mensaje ha sido enviado!");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <Container>
      <h1>Contacto</h1>
      <p><strong>Dirección:</strong> Av. Siempre Viva 123, Ciudad</p>
      <p><strong>Teléfono:</strong> +54 11 1234-5678</p>
      <p><strong>Email:</strong> contacto@hospital.com</p>

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
    </Container>
  );
};

export default Contacto;

  