import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/theme-context';

const SectionVlog = () => {
  const { theme } = useTheme(); 

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800';
  const buttonColor = isDark ? 'bg-white text-gray-800 hover:bg-gray-300' : 'bg-primary text-white hover:bg-secondary';

  return (
    <section
      className={`flex flex-col lg:flex-row items-center justify-center px-8 py-16 transition-all duration-500 ${bgColor}`}
    >
      {/* Left: Video Preview */}
      <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
        <img
          src="https://images.unsplash.com/photo-1596496181871-53d6c2a82b51"
          alt="Video thumbnail"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <button
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 transition duration-300 ${buttonColor}`}
        >
          <FaPlay className="w-6 h-6" />
        </button>
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-4">Watch Our Latest Vlog</h2>
        <p className="text-lg mb-6">
          Explore the latest insights, tips, and stories from our team. Don’t miss out on the latest trends and discussions!
        </p>
        <Link
          to="/vlogs"
          className={`inline-block px-6 py-3 rounded-lg font-semibold transition duration-300 ${buttonColor}`}
        >
          Watch More Vlogs
        </Link>
      </div>
    </section>
  );
};

export default SectionVlog;
