import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-16 px-10 text-center">
      <img
        src="https://static.wixstatic.com/media/84770f_b36940c0f3e64f0999c83e90d54c3080~mv2_d_3264_4928_s_4_2.jpg"
        alt="Emily Silver"
        className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
      />
      <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
      <p className="italic text-gray-700 max-w-xl mt-4">
        I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
      </p>

      <div className="flex justify-center space-x-4 text-gray-900 text-lg mt-6">
        <FaFacebookF />
        <FaTwitter />
        <FaYoutube />
        <FaInstagram />
      </div>
    </section>
  );
};

export default AboutSection;
