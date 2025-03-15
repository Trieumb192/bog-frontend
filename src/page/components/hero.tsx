import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1382275104/vi/anh/metaverse-city-v%C3%A0-cyberpunk-concept-k%E1%BA%BFt-xu%E1%BA%A5t-3d.jpg?s=2048x2048&w=is&k=20&c=RIX8yIGNWuHvxWkp08rmq7lVuBIHsgiOxMvnCQaFCJk=')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My Lifestyle</h1>
        <p className="text-lg md:text-2xl mb-8">Follow my journey and get inspired every day</p>

        {/* Play Button */}
        <button
          onClick={handlePlay}
          className="flex items-center justify-center w-20 h-20 bg-white text-black rounded-full hover:bg-gray-200 transition relative"
        >
          <FaPlay className="text-2xl ml-1" />
        </button>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>

            {/* Video Embed */}
            <div className="relative pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/hLQl3WQQoQ0"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
