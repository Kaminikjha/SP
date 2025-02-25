import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-pink-600 py-8 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-center">
        <p className="text-white">© {new Date().getFullYear()} Kottada Sravanthi</p>
        <div className="flex  space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/kottada-sravanthi-3a3647330" target="_blank" rel="noreferrer" className="text-white hover:text-pink-200">
            LinkedIn
          </a>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white text-pink-600 p-3 rounded-full shadow-lg hover:bg-pink-200 transition duration-300"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;