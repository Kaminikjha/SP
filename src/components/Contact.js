import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gradient-to-r from-pink-600 to-pink-400">
      <div className="container mx-auto px-4">
        <p className="text-teal-300 uppercase tracking-widest text-center">HAVE A PROJECT? OR JUST LOOKING TO HIRE?</p>
        <h2 className="text-4xl font-bold text-white text-center mt-4">Let’s Work Together</h2>
        <p className="text-lg text-white text-center mt-4 max-w-2xl mx-auto">
          Feel free to reach out if you’re looking to hire, just want to connect, or see if we can build something amazing together.
        </p>
        <div className="text-center mt-8">
          <a href="mailto:kottadasravanthi09@gmail.com" className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-200 transition duration-300">
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
