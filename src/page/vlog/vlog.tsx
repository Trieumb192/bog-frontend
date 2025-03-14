import { FaPlay } from 'react-icons/fa';

const VlogPlaylist = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-pink-50 px-10 py-16">
      <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="https://static.wixstatic.com/media/84770f_43aa6b7db561465e97b74859a51f5dc7~mv2_d_5472_3648_s_4_2.jpg"
          alt="Video thumbnail"
          className="w-full h-auto object-cover"
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
  );
};

export default VlogPlaylist;
