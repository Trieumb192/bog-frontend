import Header from '../components/header';
import HeroSection from '../components/hero';
import VlogPlaylist from '../vlog/vlog';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="font-sans bg-pink-50 text-gray-800">
      <Header />
      <HeroSection />
      <VlogPlaylist />
      <Footer />
    </div>
  );
};

export default Home;
