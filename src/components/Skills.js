import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Procreate',
    'Adobe InDesign',
    'Sketch',
    'Typography',
    'Color Theory',
    'Branding',
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-to-r from-pink-600 ">
      <div className="container mx-auto px-4">
        <p className="text-teal-300 uppercase tracking-widest text-center">MY SKILLS</p>
        <h2 className="text-4xl font-bold text-white text-center mt-4">Technologies I Master</h2>
        <p className="text-lg text-white text-center mt-4 max-w-2xl mx-auto">
          I’ve sharpened my skills with top-tier tools, diving into design brilliance. Check out my dynamic toolkit:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:shadow-xl"
            >
              <p className="text-pink-600 font-semibold">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;