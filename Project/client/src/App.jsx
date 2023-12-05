import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './footer.jsx'
import Policies from "./policies.jsx"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
        <Route path="/policies" element={<Policies/>} /> 
      </Routes>
      
      <Footer/>
     
    </>
  );
};

export default App;

