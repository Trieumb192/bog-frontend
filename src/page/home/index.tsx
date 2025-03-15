import Header from '../components/header';
import HeroSection from '../components/hero';
import Footer from '../components/footer';
import ImagesContain from '../components/image-contain';
import SectionVlog from '../components/section-vlog';

const Home = () => {
  return (
    <div className="font-sans bg-pink-50 text-gray-800 flex  items-center justify-center flex-col">
      <Header />
      <HeroSection />
      <SectionVlog/>
      <ImagesContain />
      <Footer />
    </div>
  );
};

export default Home;
