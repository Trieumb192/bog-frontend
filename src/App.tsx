import React, { useState } from 'react';
import PostForm from './page/post/component/form';
import PostList from './page/post';
import Header from './page/header/header';
import Footer from './page/components/footer';
import AboutSection from './page/about/about';
import HeroSection from './page/hero/hero';
import VlogPlaylist from './page/vlog/vlog';

const App: React.FC = () => {
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <div className="font-sans bg-pink-50 text-gray-800">
      <Header />
      <HeroSection />
      <VlogPlaylist />
      <AboutSection />
      <PostForm onSuccess={handleReload} />
      <PostList reload={reload} />
      <Footer />
    </div>
  );
};

export default App;