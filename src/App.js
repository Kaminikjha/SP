import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  

  return (
   
      <div className=" font-sans">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    
  );
}

export default App;