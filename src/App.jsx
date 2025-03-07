import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';
import Contacto from './pages/Contacto';
import Servicios from './pages/Servicios';
import Historia from './pages/Historia';
import MisionVision from './pages/MisionVision';
import CAPS from './pages/CAPS';
import PersonalProcedures from './components/tramitesPersonales/PersonalProcedures'; // Importamos el componente de TramitesPersonales
import CalendarPage from './components/calendarioVacunacion/CalendarPage'; // Importamos el componente CalendarPage
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
        <Route path="/tramites-personales" element={<PersonalProcedures />} /> {/* Ruta para TramitesPersonales */}
        <Route path="/calendar" element={<CalendarPage />} /> {/* Ruta para el Calendario de Vacunación */}
      </Routes>
    </Router>
  );
};

export default App;
