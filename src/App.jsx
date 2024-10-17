import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPortFolio from "../src/components/MyPortFolio.jsx"
import Navbar from './components/Navbar.jsx';
import Myimage from './components/Myimage.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
// import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Myimage/>
      <About/>
      <Services/>
      <Projects/>
      <ContactForm/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;