import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Historia from './pages/Historia';
import MisionVision from './pages/MisionVision';
import CAPS from './pages/CAPS';
import Navbar from './components/navbar/Navbar';
import { GlobalStyles } from '../src/Styles/GlobalStyles'; // Importa los estilos globales
import WhatsAppButton from "./components/iconoWhatsApp/WhatsAppButton"; // Importar el botón flotante

const App = () => {
  return (
    <Router>
      <GlobalStyles /> {/* Aplica los estilos globales */}
      <Navbar />
      <WhatsAppButton /> {/* Agregar el botón flotante */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/mision-vision" element={<MisionVision />} />
        <Route path="/caps" element={<CAPS />} />
      </Routes>
    </Router>
  );
};

export default App;
