import React from 'react';
import logo from "../assets/logo.ico"

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="fixed w-full z-50">
      <nav className="bg-pink-600  p-4 rounded-full shadow-lg mx-4 mt-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#top" className="flex items-center">
            <img src={logo} alt="Kottada Sravanthi Logo" className="w-12 h-12" />
          </a>
          <ul className="hidden md:flex space-x-8">
            <li><a href="#about" className="text-white hover:text-pink-200">About</a></li>
            <li><a href="#skills" className="text-white hover:text-pink-200">Skills</a></li>
            <li><a href="#projects" className="text-white hover:text-pink-200">Projects</a></li>
            <li><a href="#contact" className="text-white hover:text-pink-200">Contact</a></li>
          </ul>
         
         
        </div>
      </nav>
    </header>
  );
};

export default Header;