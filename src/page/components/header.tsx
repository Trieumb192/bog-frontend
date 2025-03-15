import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="relative flex justify-between items-center px-10 py-6 bg-slate-300 w-11/12">
      {/* Left - Name */}
      <div className="text-sm font-bold tracking-widest text-gray-900">@NGUYỄN VĂN TRIỆU</div>

      {/* Right - Nav & Icons */}
      <div className="flex items-center space-x-6">
        {/* Menu */}
        <nav className="flex space-x-4 text-sm italic text-gray-800">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Home
          </Link>
          <a href="#" className="hover:underline">
            Vlog
          </a>
          <Link
            to="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
