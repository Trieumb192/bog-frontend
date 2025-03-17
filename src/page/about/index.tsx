import React, { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import ContactDrawer from './components/contact-drawer ';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-gray-700 text-sm md:text-base uppercase tracking-widest mb-2 font-opensans">
            Welcome to My World
          </p>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-playfair font-bold mb-6 tracking-wide leading-tight">
            About Me
          </h1>
          <p className="text-gray-700 text-base md:text-lg font-opensans max-w-2xl mx-auto">
            Explore my journey as a passionate Backend Developer crafting scalable systems and digital solutions.
          </p>
          <div className="mt-8">
            <button
              className="inline-block px-10 py-4 bg-gray-900 text-white text-lg font-opensans rounded-full hover:bg-gray-700 transition duration-300"
              onClick={() => setOpenDrawer(true)}
            >
              Contact Me
            </button>
          </div>
          <ContactDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gray-900">
          Hi, I'm Trieu Nguyen
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-opensans mb-4">
          Java Backend Developer passionate about crafting scalable, high-performance systems.
        </p>
        <p className="text-lg md:text-xl text-gray-600 font-opensans">
          Focused on building secure, maintainable solutions that drive business success and digital
          transformation.
        </p>
      </section>

      {/* Image + Text Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
          <img
            src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-bat-tay-trong-kinh-doanh.jpg"
            alt="Coding Journey"
            className="w-full md:w-1/2 rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-playfair font-semibold mb-6 text-gray-900">My Journey</h3>
            <p className="text-gray-600 text-lg font-opensans mb-4 leading-relaxed">
              I may have started my coding journey later than others, but I've been sprinting ever
              since.
            </p>
            <p className="text-gray-600 text-lg font-opensans leading-relaxed">
              Through continuous learning and dedication, I aim to become an exceptional Backend
              Developer, building reliable and efficient systems that create real-world impact.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-white">
        <h3 className="text-3xl md:text-4xl font-playfair font-semibold mb-8 text-gray-900">
          Follow me on my Vlog!
        </h3>
        <Link
          to="/vlog"
          className="inline-block px-10 py-4 bg-gray-900 text-white text-lg font-opensans rounded-full hover:bg-gray-700 transition duration-300"
        >
          @myvlog
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
