import React, { useCallback, useEffect, useState } from 'react';
import Header from '../components/header';
import HeroSection from '../components/hero';
import Footer from '../components/footer';
import ImagesContain from '../components/image-contain';
import SectionVlog from '../components/section-vlog';
import BackToTopButton from '../components/back-to-top';
import LifePhilosophy from '../components/life-philosophy';
import { PhilosophyDto } from '../../types/Dto';
import { PhilosoPhyApi } from '../../service/PhilosophyApi';
import { HTTP_OK } from '../../constants/common';
import { message } from 'antd';

const Home: React.FC = () => {
  const [philosophies, setPhilosoPhies] = useState<PhilosophyDto[]>([]);
  
  const getPhilosophies = useCallback(async () => {
    const res = await PhilosoPhyApi.get();
    if (res.statusCode === HTTP_OK) {
      setPhilosoPhies(res.data || []);
    } else {
      message.error("Lỗi Lấy dữ liệu từ server!");
    }
  },[]);

  useEffect(() => {
    getPhilosophies();
  }, [getPhilosophies]);

  return (
    <div className="relative font-sans min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md">
        <Header />
      </div>

      {/* Main Content */}
      <main className="pt-[50px] flex flex-col items-center justify-center w-full">
        {/* Life Philosophy */}
        {
          philosophies.length > 0 &&
          <LifePhilosophy philosophies={philosophies}/>
        } 
        
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
