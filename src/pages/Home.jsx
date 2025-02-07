import About from "../components/about/About";
import PersonalProcedures from "../components/tramitesPersonales/PersonalProcedures";
import InformacionPublica from "../components/informacionPublica/informacionPublica";
import Footer from "../components/footer/Footer";
import Autoridades from "../components/autoridades/Autoridades";
import Comunication from "../components/about/Comunication";

const Home = () => {
  return (
    <>
      <About />
      <Comunication/>
      <hr />
      <Autoridades/>
      <PersonalProcedures />
      <InformacionPublica />
      <Footer />
    </>
  );
};

export default Home;
