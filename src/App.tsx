import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Vlog from './page/vlog/vlog';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from './page/contexts/theme-context';
import { AuthProvider } from './page/contexts/auth-context';
import Admin from './page/admin';

// Theme màu toàn app
const themeColors: Record<string, { bg: string; text: string }> = {
  light: { bg: '#FFF1F2', text: '#1F2937' },
  dark: { bg: '#1F2937', text: '#F9FAFB' },
  neon: { bg: '#0f0f0f', text: '#39ff14' },
  pastel: { bg: '#ffd1dc', text: '#6b705c' },
  retro: { bg: '#fefae0', text: '#606c38' },
  cyberpunk: { bg: '#0f0f0f', text: '#ff0090' }
};

const AppContent = () => {
  const { theme } = useTheme();
  const current = themeColors[theme] || themeColors.light;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{
        backgroundColor: current.bg,
        color: current.text
      }}
      transition={{ duration: 0.5 }}
      className="min-h-screen transition-colors duration-500"
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vlog" element={<Vlog />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </Router>
    </motion.div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AuthProvider> 
      <AppContent />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
