import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ImageDto } from '../../types/Dto';

interface ImagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: ImageDto[];
  userName: string;
}

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = (props) => {
  const { isOpen, onClose, images, userName } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white w-[80%] max-w-5xl h-[80%] flex rounded-lg overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-50"
        >
          <X size={28} />
        </button>

        {/* Left: Image Preview */}
        <div className="relative w-2/3 bg-black flex items-center justify-center">
          {/* Prev Button */}
          {images.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white z-20"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 text-white z-20"
            >
              <ChevronRight size={30} />
            </button>
          )}

          {/* Current Image */}
          <img
            src={images[currentIndex].url}
            alt="Preview"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Right: Info */}
        <div className="w-1/3 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="text-lg font-semibold">@{userName}</div>
            </div>
            <div className="flex-grow overflow-y-auto text-sm text-gray-700 leading-relaxed">
              {images[currentIndex].tag}
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t">15.03.2025</div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewModal;
