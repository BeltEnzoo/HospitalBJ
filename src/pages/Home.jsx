// pages/Home.jsx
import React from 'react';
import Navbar from "../components/navbar/Navbar";  // Importa el Navbar
import About from "../components/about/About";
import PersonalProcedures from "../components/tramitesPersonales/PersonalProcedures";
import InformacionPublica from "../components/informacionPublica/InformacionPublica";
import Footer from "../components/footer/Footer";
import Autoridades from "../components/autoridades/Autoridades";
import Comunication from "../components/about/Comunication";
import { newsData } from "../data/newsData"; // Importamos el array de noticias
import LastNews from "../components/lastNews/LastNews"; // Importamos el componente LastNews

const Home = () => {
  return (
    <>
      {/* <Navbar /> Asegúrate de que el Navbar esté aquí */}
      <About />
      <Comunication />
      <hr />
      <LastNews newsData={newsData} /> {/* Usamos LastNews aquí */}
      <Autoridades />
      <PersonalProcedures />
      <InformacionPublica />
      <Footer />
    </>
  );
};

export default Home;
