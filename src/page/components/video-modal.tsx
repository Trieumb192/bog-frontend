import React from 'react';

type Props = {
  show: boolean;
  handleClose: () => void;
  videoUrl: string;
};

const VideoModal: React.FC<Props> = ({ show, handleClose, videoUrl }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 animate-fade-in">
      <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-white text-4xl font-bold z-10 hover:text-red-500 transition"
        >
          &times;
        </button>

        {/* Video Embed */}
        <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={`${videoUrl}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
