import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import 'aos/dist/aos.css';
import { useTheme } from '../contexts/theme-context';
import ThemeSwitcher from './theme-switcher';


const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme(); 
  const darkMode = theme === 'dark';

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      } shadow-md transition-colors duration-300`}
      data-aos="fade-down"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div
          className="text-lg font-extrabold tracking-widest cursor-pointer"
          data-aos="fade-right"
        >
          @VAN TRIEU NGUYEN
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-8"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <Link to="/" className="hover:text-pink-500 transition font-medium">
            Home
          </Link>
          <Link to="/vlog" className="hover:text-pink-500 transition font-medium">
            Vlog
          </Link>
          <Link to="/about" className="hover:text-pink-500 transition font-medium">
            About
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4" data-aos="fade-left" data-aos-delay="400">
          <div className="hidden md:flex space-x-4 text-lg">
            <FaFacebookF
              className="cursor-pointer hover:text-blue-600 transition-transform hover:scale-125"
              onClick={() => window.open('https://www.facebook.com/trieupro.yuki')}
            />
            <FaTwitter
              className="cursor-pointer hover:text-blue-400 transition-transform hover:scale-125"
              onClick={() => window.open('https://twitter.com/yourprofile')}
            />
            <FaYoutube
              className="cursor-pointer hover:text-red-600 transition-transform hover:scale-125"
              onClick={() => window.open('https://www.youtube.com/@KunKumTV')}
            />
            <FaInstagram
              className="cursor-pointer hover:text-pink-500 transition-transform hover:scale-125"
              onClick={() => window.open('https://www.instagram.com/yourprofile')}
            />
          </div>

          {/* Dark Mode */}
          <ThemeSwitcher />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl hover:text-pink-500"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-6 py-6 ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          } shadow-lg`}
          data-aos="fade-in"
        >
          <Link to="/" onClick={toggleMobileMenu} className="hover:text-pink-500 text-lg">
            Home
          </Link>
          <Link to="/vlog" onClick={toggleMobileMenu} className="hover:text-pink-500 text-lg">
            Vlog
          </Link>
          <Link to="/about" onClick={toggleMobileMenu} className="hover:text-pink-500 text-lg">
            About
          </Link>

          <div className="flex space-x-4 text-lg">
            <FaFacebookF
              className="cursor-pointer hover:text-blue-600 transition-transform hover:scale-125"
              onClick={() => window.open('https://www.facebook.com/trieupro.yuki')}
            />
            <FaTwitter
              className="cursor-pointer hover:text-blue-400 transition-transform hover:scale-125"
              onClick={() => window.open('https://twitter.com/yourprofile')}
            />
            <FaYoutube
              className="cursor-pointer hover:text-red-600 transition-transform hover:scale-125"
              onClick={() => window.open('https://www.youtube.com/@KunKumTV')}
            />
            <FaInstagram
              className="cursor-pointer hover:text-pink-500 transition-transform hover:scale-125"
              onClick={() => window.open('https://www.instagram.com/yourprofile')}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
