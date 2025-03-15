import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="relative flex justify-between items-center px-10 py-6 bg-white w-11/12">
      {/* Left - Name */}
      <div className="text-sm font-bold tracking-widest text-gray-900">@VAN TRIEU NGUYEN</div>

      {/* Right - Nav & Icons */}
      <div className="flex items-center space-x-6">
        {/* Menu */}
        <nav className="flex space-x-4 text-sm italic text-gray-800">
          <Link
            to="/"
            className="hover:underline"
          >
            Home
          </Link>
          <Link
            to="/vlog"
            className="hover:underline"
          >
            Vlog
          </Link>
          <Link
            to="/about"
            className="hover:underline"
          >
            About
          </Link>
        </nav>
        {/* Social Icons */}
        <div className="flex space-x-3 text-gray-900 text-lg">
          <FaFacebookF className='cursor-pointer' onClick={() => window.open("https://www.facebook.com/trieupro.yuki")}/>
          <FaTwitter className='cursor-pointer' onClick={() => window.open("https://www.facebook.com/trieupro.yuki")}/>
          <FaYoutube className='cursor-pointer' onClick={() => window.open("https://www.youtube.com/@KunKumTV")}/>
          <FaInstagram className='cursor-pointer' onClick={() => window.open("https://www.facebook.com/trieupro.yuki")}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
