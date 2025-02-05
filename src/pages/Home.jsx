import About from "../components/about/About";
import PersonalProcedures from "../components/tramitesPersonales/PersonalProcedures";
import InformacionPublica from "../components/informacionPublica/informacionPublica";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <About />
      <hr />
      <PersonalProcedures />
      <InformacionPublica />
      <Footer />
    </>
  );
};

export default Home;
