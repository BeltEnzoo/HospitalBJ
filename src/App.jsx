import { useState } from 'react'
import Header from './components/header/header'
import About from './components/about/About'
import PersonalProcedures from './components/tramitesPersonales/PersonalProcedures'
import InformacionPublica from './components/informacionPublica/informacionPublica'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <About />
      <hr></hr>
      <PersonalProcedures />
      <InformacionPublica/>
      <Footer/>
    </>
  )
}

export default App
