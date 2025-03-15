import { FaPlay } from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';

const VlogPlaylist = () => {
  return (
    <>
      <Header/>
      <section className="flex flex-col lg:flex-row items-center justify-center bg-pink-50 px-10 py-16">
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEAj3TgZ1vIGqNfkYWHtRZj-4E2R1ksbX_0A&s"
            alt="Video thumbnail"
            className="w-<50> h-auto object-cover"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-md hover:scale-110 transition">
            <FaPlay className="text-gray-900 text-xl" />
          </button>
        </div>

        <div className="w-full lg:w-1/2 bg-white px-8 py-10 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Style & Beyond</h2>
          <p className="text-sm tracking-widest text-gray-500 mb-4">Playlist</p>
          <hr className="border-t border-gray-300 mb-4" />
          <p className="italic text-gray-700 leading-relaxed">
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>
        </div>
      </section>
      <Footer/>
    </>
    
  );
};

export default VlogPlaylist;
