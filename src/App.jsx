
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail'; // Página de detalle de la noticia
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Historia from './pages/Historia';
import MisionVision from './pages/MisionVision';
import Navbar from './components/navbar/Navbar';
import CAPS from './pages/CAPS'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} /> {/* Ruta para la noticia completa */}
        <Route path="/" element={<Home />} />
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
