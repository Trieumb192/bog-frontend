import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTheme } from '../contexts/theme-context';
import { PhilosophyDto } from '../../types/Dto';

interface LifePhilosophyProps {
  philosophies: PhilosophyDto[];
}
const LifePhilosophy: React.FC<LifePhilosophyProps> = ({ philosophies }) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotesLength = philosophies.length;

  const { content, author } = philosophies[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotesLength);
  }, [quotesLength]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotesLength) % quotesLength);
  }, [quotesLength]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div
      className={`relative w-full h-[360px] flex flex-col justify-center items-center text-center px-4 transition-colors duration-500 $${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-2xl md:text-4xl font-semibold italic leading-relaxed mb-4">
            “{content}”
          </p>

          <div className="text-base md:text-lg font-medium opacity-80">{author}</div>
        </motion.div>
      </AnimatePresence>

      {/* Buttons Next/Prev */}
      <div className="flex space-x-4 mt-8">
        <Button
          shape="circle"
          onClick={handlePrev}
          className={`flex items-center justify-center border transition duration-300 ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
              : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100'
          }`}
          icon={<LeftOutlined />}
        />

        <Button
          shape="circle"
          onClick={handleNext}
          className={`flex items-center justify-center border transition duration-300 ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700'
              : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100'
          }`}
          icon={<RightOutlined />}
        />
      </div>

      {/* Indicators
      <div className="absolute bottom-4 flex space-x-2">
        {philosophies.map((p: PhilosophyDto, idx: number) => (
          <div
            key={p.id}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? theme === 'dark'
                  ? 'bg-white'
                  : 'bg-gray-800'
                : 'bg-gray-400'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default LifePhilosophy;
