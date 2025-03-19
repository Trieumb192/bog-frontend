import { FaFacebook } from 'react-icons/fa';
import ImagePreviewModal from './image-preview-modal';
import { useCallback, useEffect, useState } from 'react';
import { ImageDto } from '../../types/Dto';
import { ImageApi } from '../../service/ImageApi';
import { useTheme } from '../contexts/theme-context';

const ImagesContain = () => {
  const [images, setImages] = useState<ImageDto[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); 
  const { theme } = useTheme();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await ImageApi.getImages();
        setImages(res.data || []);
      } catch (err) {
        console.error('Error fetching images:', err);
      } 
    };

    fetchImages();
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + 3); 
  },[]);

  return (
    <section
      className={`py-10 w-11/12 transition-colors duration-500 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Follow Me on Facebook
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
        {images.slice(0, visibleCount).map((img, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg cursor-pointer border transition-all duration-500 ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={img.url}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <FaFacebook className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>

      {visibleCount < images.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className={`px-4 py-2 rounded-lg hover:bg-blue-700 transition ${
              theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600 text-white'
            }`}
          >
            Load more
          </button>
        </div>
      )}

      <ImagePreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        userName="trieunguyen"
      />
    </section>
  );
};

export default ImagesContain;
