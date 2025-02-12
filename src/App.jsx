import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Historia from "./pages/Historia";
import MisionVision from "./pages/MisionVision"; // Importar la nueva página

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/mision-vision" element={<MisionVision />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
