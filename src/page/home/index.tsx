import React from 'react';
import Header from '../components/header';
import HeroSection from '../components/hero';
import Footer from '../components/footer';
import ImagesContain from '../components/image-contain';
import SectionVlog from '../components/section-vlog';
import BackToTopButton from '../components/back-to-top';

const Home: React.FC = () => {
  return (
    <div className="relative font-sans min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md">
        <Header />
      </div>

      {/* Main Content */}
      <main className="pt-[80px] flex flex-col items-center justify-center w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Section Vlog */}
        <section className="w-full max-w-7xl px-4 py-12">
          <SectionVlog />
        </section>

        {/* Images Section */}
        <section className="w-full max-w-7xl px-4 py-12">
          <ImagesContain />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back To Top Button */}
      <BackToTopButton />
    </div>
  );
};

export default Home;
