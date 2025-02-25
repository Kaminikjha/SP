import React, { useState } from 'react';
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      image: p1, // Use the imported image
      title: 'Abstract Odyssey',
      description: 'A vibrant explosion of colors and shapes, redefining abstract art with a futuristic twist.',
      details: 'This project was created using Adobe Illustrator and Procreate. It explores the intersection of abstract art and futuristic design.',
    },
    {
      image: p2, // Use the imported image
      title: 'Toyota Velocity',
      description: 'A sleek, futuristic car design for Toyota, blending speed and style in bold strokes.',
      details: 'This concept car design was created for Toyota, focusing on aerodynamics and modern aesthetics.',
    },
    {
      image: p3, // Use the imported image
      title: 'Minimal Magic',
      description: 'A minimalist poster that packs a punch—clean lines, striking visuals, pure impact.',
      details: 'This poster design uses minimalism to convey a powerful message with clean lines and bold typography.',
    },
  ];

  return (
    <section id="projects" className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-600 dark:text-pink-400">Designs That Pop</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mt-4 max-w-2xl mx-auto">
          A peek into my world of creativity—where every pixel tells a story.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image} // Use the image from the project object
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4"
              >
                <h3 className="text-2xl font-bold text-white text-center">{project.title}</h3>
                <p className="text-white text-center mt-2">{project.description}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors duration-300"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400">{selectedProject.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{selectedProject.description}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">{selectedProject.details}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;