import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes,
  FaUserCircle,
} from 'react-icons/fa';
import 'aos/dist/aos.css';
import { useTheme } from '../contexts/theme-context';
import ThemeSwitcher from './theme-switcher';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import AuthModal from './auth-modal';
import { useAuth } from '../contexts/auth-context';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';
  const [menuItem, setMenuItem] = useState(['Home', 'Vlog', 'About']);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalVisible, setAuthModalVisible] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user?.role?.includes("admin")) {
      setMenuItem(prev => {
        if (!prev.includes("Admin")) {
          return [...prev, "Admin"];
        }
        return prev;
      });
    } else {

      setMenuItem(['Home', 'Vlog', 'About']);
    }
  }, [isAuthenticated, user?.role]);
  
  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">Trang cá nhân</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={logout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

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
        <div
          className="hidden md:flex items-center space-x-4"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {/* SOCIAL ICONS */}
          <div className="hidden md:flex space-x-3 text-lg">
            <FaFacebookF
              className="cursor-pointer transition-transform duration-300 hover:text-blue-600 hover:scale-110"
              onClick={() => window.open('https://www.facebook.com/trieupro.yuki', '_blank')}
            />
            <FaTwitter
              className="cursor-pointer transition-transform duration-300 hover:text-blue-400 hover:scale-110"
              onClick={() => window.open('https://www.youtube.com/@KunKumTV', '_blank')}
            />
            <FaYoutube
              className="cursor-pointer transition-transform duration-300 hover:text-red-600 hover:scale-110"
              onClick={() => window.open('https://www.youtube.com/@KunKumTV', '_blank')}
            />
            <FaInstagram
              className="cursor-pointer transition-transform duration-300 hover:text-pink-500 hover:scale-110"
              onClick={() => window.open('https://www.youtube.com/@KunKumTV', '_blank')}
            />
          </div>

          {/* THEME SWITCH */}
          <ThemeSwitcher />

          {/* Login/Register or User Info */}
          <div className="flex items-center ml-auto">
            {isAuthenticated ? (
              <Dropdown overlay={userMenu} trigger={['click']}>
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer transition-colors duration-300
                  ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                >
                  <Avatar
                    icon={<FaUserCircle />}
                    size="small"
                    className={`border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                  />
                  <span className="capitalize font-medium hidden md:block">{user?.fullName}</span>
                </div>
              </Dropdown>
            ) : (
              <Button
                onClick={() => setAuthModalVisible(true)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg shadow-sm transition duration-300
                  ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                Đăng nhập
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AuthModal visible={authModalVisible} onClose={() => setAuthModalVisible(false)} />

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Mobile Menu */}
          <div className="md:hidden bg-gray-800 bg-opacity-95 fixed top-16 left-0 w-full h-auto max-h-[calc(100vh-4rem)] overflow-y-auto z-50 flex flex-col items-center py-4 transition-transform duration-300 ease-in-out">
            {menuItem.map((item, idx) => (
              <Link
                key={idx}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-lg font-medium text-white py-3 hover:text-pink-500 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* LOGIN BUTTON ON MOBILE */}
            {!isAuthenticated && (
              <Button
                type="primary"
                onClick={() => {
                  setAuthModalVisible(true);
                  setMobileMenuOpen(false);
                }}
                className="rounded-lg px-6 py-2 mt-4"
              >
                Đăng nhập
              </Button>
            )}

            <div className="flex space-x-6 mt-4">
              <FaFacebookF
                className="cursor-pointer text-white text-2xl hover:text-blue-600 transition-colors duration-300"
                onClick={() => window.open('https://www.facebook.com/trieupro.yuki', '_blank')}
              />
              <FaTwitter
                className="cursor-pointer text-white text-2xl hover:text-blue-400 transition-colors duration-300"
                onClick={() => window.open('https://twitter.com/yourprofile', '_blank')}
              />
              <FaYoutube
                className="cursor-pointer text-white text-2xl hover:text-red-600 transition-colors duration-300"
                onClick={() => window.open('https://www.youtube.com/@KunKumTV', '_blank')}
              />
              <FaInstagram
                className="cursor-pointer text-white text-2xl hover:text-pink-500 transition-colors duration-300"
                onClick={() => window.open('https://www.instagram.com/yourprofile', '_blank')}
              />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
