import React from 'react';
import Header from './page/components/header';
import Footer from './page/components/footer';
import AboutSection from './page/about/about';
import HeroSection from './page/hero/hero';
import VlogPlaylist from './page/vlog/vlog';

const App: React.FC = () => {
  return (
    <div className="font-sans bg-pink-50 text-gray-800">
      <Header />
      <HeroSection />
      <VlogPlaylist />
      <AboutSection />
      {/* <PostForm onSuccess={handleReload} />
      <PostList reload={reload} /> */}
      <Footer />
    </div>
  );
};

export default App;