import React from 'react';
import edu from "../assets/Education_2.png"

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-600">My Story</h2>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-1/2">
            <img src={edu} alt="Education illustration" className="w-full max-w-md mx-auto" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <p className="text-lg text-gray-700">
              I’m Kottada Sravanthi—a design maverick with a passion for crafting jaw-dropping visuals. Based in Hyderabad, I fuse creativity and strategy to create designs that resonate.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              From doodling as a kid to sculpting iconic brand identities, I live for the art of storytelling through design—whether it’s a Graphic designs or a Posters.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              When I’m not designing, I’m chasing inspiration in art galleries or sipping chai under the stars.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;