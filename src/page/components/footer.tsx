import { useTheme } from '../contexts/theme-context';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGithub
} from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-300';
  const iconHover = isDark ? 'hover:text-pink-400' : 'hover:text-blue-500';

  return (
    <footer
      className={`w-full py-6 px-4 text-sm tracking-wider border-t ${bgColor} ${textColor} ${borderColor} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left content */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span>© 2025 by</span>
          <span className="font-semibold text-pink-400 hover:text-pink-500 transition">Triệu Nguyễn</span>
        </div>

        {/* Right content */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="flex items-center">
            Powered by
            <span className="ml-1 font-medium text-blue-500 hover:text-blue-600 transition">React</span> &
            <span className="ml-1 font-medium text-green-500 hover:text-green-600 transition">TailwindCSS</span>.
          </span>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/trieunguyen"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition transform hover:scale-110 ${iconHover}`}
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.youtube.com/@KunKumTV"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition transform hover:scale-110 ${iconHover}`}
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.youtube.com/@KunKumTV"
              className={`transition transform hover:scale-110 ${iconHover}`}
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/trieupro.yuki"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition transform hover:scale-110 ${iconHover}`}
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
