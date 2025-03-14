const HeroSection = () => {
  return (
    <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('https://static.wixstatic.com/media/84770f_43aa6b7db561465e97b74859a51f5dc7~mv2_d_5472_3648_s_4_2.jpg')" }}>
      
      <div className="bg-white bg-opacity-70 px-10 py-6 rounded-md">
        <h1 className="text-4xl font-bold text-gray-800">Emily Silver</h1>
        <p className="italic text-sm text-gray-600 mt-2 tracking-widest">Lifestyle Blogger & Vlogger</p>
      </div>
    </section>
  );
};

export default HeroSection;
