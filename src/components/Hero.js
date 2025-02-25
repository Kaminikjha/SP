import React from 'react';
import { motion } from 'framer-motion';
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-r from-pink-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-teal-300 uppercase tracking-widest"
            >
              hello, i’m
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mt-4"
            >
              Kottada Sravanthi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white mt-6"
            >
              A Hyderabad-based visionary Graphic Designer weaving imagination into breathtaking visuals for branding, Graphic designs, Posters and illustration.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="mailto:kottadasravanthi09@gmail.com"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-200 transition duration-300 shadow-lg hover:shadow-xl"
              >
                Let’s Collaborate
              </a>
            </motion.div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              src={hero}
              alt="Come back later illustration"
              className="bg-transparent w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;