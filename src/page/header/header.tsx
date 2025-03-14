import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-pink-50">
      {/* Left - Name */}
      <div className="text-sm font-bold tracking-widest text-gray-900">
        @NGUYỄN VĂN TRIỆU
      </div>

      {/* Center - Logo */}
      <div className="text-4xl font-bold tracking-wide text-gray-900">
        v l o g
      </div>

      {/* Right - Nav & Icons */}
      <div className="flex items-center space-x-6">
        {/* Menu */}
        <nav className="flex space-x-4 text-sm italic text-gray-800">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Vlog</a>
          <a href="#" className="hover:underline">About</a>
        </nav>
        {/* Social Icons */}
        <div className="flex space-x-3 text-gray-900 text-lg">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </header>
  );
};

export default Header;
