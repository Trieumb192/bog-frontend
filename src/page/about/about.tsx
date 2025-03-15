import React from 'react';

const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('https://static.wixstatic.com/media/11062b_d1e3d3e8ee574cb9a6fce3d751fd382b~mv2.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">About Me</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Hi, I'm Jane Doe</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          I'm a lifestyle vlogger passionate about capturing moments and sharing stories.
          Follow my journey as I explore new places, try exciting things, and document every step along the way!
        </p>
      </section>

      {/* Image + Text Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-0 gap-10">
          <img
            src="https://static.wixstatic.com/media/11062b_7f345a77b5a84204ab5c2b2aa785d8e3~mv2.jpg"
            alt="Vlogger"
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Starting from humble beginnings, I've built a platform that allows me to connect with amazing people worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether I'm vlogging about daily life or sharing travel adventures, authenticity is at the core of everything I do.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h3 className="text-3xl font-semibold mb-6">Follow me on Instagram!</h3>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          @myvlog
        </a>
      </section>
    </div>
  );
};

export default About;
