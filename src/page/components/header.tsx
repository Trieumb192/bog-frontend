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
  const { theme } = useTheme();
  const darkMode = theme === 'dark';
  const menuItem = ['Home', 'Vlog', 'About'];
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow transition-colors duration-300`}
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold tracking-wider cursor-pointer transition-transform duration-300 hover:scale-105"
          data-aos="fade-right"
        >
          @VAN TRIEU NGUYEN
        </Link>

        {/* DESKTOP MENU */}
        <nav
          className="hidden md:flex space-x-8 items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {menuItem.map((item, idx) => (
            <Link
              key={idx}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wide hover:text-pink-500 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* SOCIAL + THEME SWITCH */}
        <div className="hidden md:flex items-center space-x-4" data-aos="fade-left" data-aos-delay="400">
          {/* SOCIAL ICONS */}
          <div className="hidden md:flex space-x-3 text-lg">
            <FaFacebookF
              className="cursor-pointer transition-transform duration-300 hover:text-blue-600 hover:scale-110"
              onClick={() => window.open('https://www.facebook.com/trieupro.yuki', '_blank')}
            />
            <FaTwitter
              className="cursor-pointer transition-transform duration-300 hover:text-blue-400 hover:scale-110"
              onClick={() => window.open('https://twitter.com/yourprofile', '_blank')}
            />
            <FaYoutube
              className="cursor-pointer transition-transform duration-300 hover:text-red-600 hover:scale-110"
              onClick={() => window.open('https://www.youtube.com/@KunKumTV', '_blank')}
            />
            <FaInstagram
              className="cursor-pointer transition-transform duration-300 hover:text-pink-500 hover:scale-110"
              onClick={() => window.open('https://www.instagram.com/yourprofile', '_blank')}
            />
          </div>

          {/* THEME SWITCH */}
          <ThemeSwitcher />
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 fixed top-16 left-0 w-full h-full flex flex-col items-center py-4">
          {menuItem.map((item, idx) => (
            <Link
              key={idx}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-lg font-medium text-white py-2 hover:text-pink-500 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF
              className="cursor-pointer text-white text-xl hover:text-blue-600 transition-colors duration-300"
              onClick={() => window.open('https://www.facebook.com/trieupro.yuki', '_blank')}
            />
            <FaTwitter
              className="cursor-pointer text-white text-xl hover:text-blue-400 transition-colors duration-300"
              onClick={() => window.open('https://twitter.com/yourprofile', '_blank')}
            />
            <FaYoutube
              className="cursor-pointer text-white text-xl hover:text-red-600 transition-colors duration-300"
              onClick={() => window.open('https://www.youtube.com/@KunKumTV', '_blank')}
            />
            <FaInstagram
              className="cursor-pointer text-white text-xl hover:text-pink-500 transition-colors duration-300"
              onClick={() => window.open('https://www.instagram.com/yourprofile', '_blank')}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;