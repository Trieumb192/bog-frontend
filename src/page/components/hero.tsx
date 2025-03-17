import React, { useState } from 'react';
import { FaPlay, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import VideoModal from './video-modal';
import { useTheme } from '../contexts/theme-context';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { theme } = useTheme();

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const VIDEO_URL = 'https://www.youtube.com/embed/hLQl3WQQoQ0';

  return (
    <section
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          theme === 'dark'
            ? "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyankJg5K1G1j2I_dDYTFis30KQpLq9whJGg&s')"
            : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqY1K-pOl6Ejp7sjj0z_mRk9o_XHDw08IkQ&s')"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 animate-pulse opacity-50" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Lifestyle
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-10 max-w-xl drop-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Follow my journey and get inspired every day.
        </motion.p>

        <motion.button
          aria-label="Play video"
          title="Play video"
          onClick={() => setShowVideo(true)}
          className="flex items-center justify-center w-20 h-20 bg-white text-black rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPlay className="text-2xl ml-1 group-hover:text-pink-600 transition-colors duration-300" />
          <span className="absolute w-full h-full rounded-full animate-ping bg-white opacity-20" />
        </motion.button>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={handleScrollDown}
        >
          <FaChevronDown size={24} className="animate-bounce" />
        </motion.div>
      </div>
      <VideoModal
        show={showVideo}
        handleClose={() => setShowVideo(false)}
        videoUrl={VIDEO_URL}
      />
    </section>
  );
};

export default Hero;
