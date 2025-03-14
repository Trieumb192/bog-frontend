import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-16 px-10 text-center">
      <img
        src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/70855330_3259636084077581_5727646885615763456_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzFyLNZ0aq36nQn00Kpr87WHYpy_mXCsZYdinL-ZcKxlrMwkqw82bTQS-N2vEktuuXVyTxrO8V1MRngjdEiwvO&_nc_ohc=OsSZc3CtZbIQ7kNvgER8FTb&_nc_oc=Adg6PqTUxT6UhcN5od1SHJidHy-oiNEk4dei88UiMMQUauTnt7TrYQoSvzyWkkDbfHQLWOYNxXZdAGkuLbgRGLLy&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=ep5mEVRf4ZVBrGkaLtwJAw&oh=00_AYGiBdPsDElZn7eVlsbtbitlUqQe-kvX5FtuijyLY86JKg&oe=67FB9D8B"
        alt="Triệu Nguyễn"
        className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
      />
      <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
      <p className="italic text-gray-700 max-w-xl mt-4">
        I'm a Java Developer. Click here to add your own text and edit me. Let your users get to know you.
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
