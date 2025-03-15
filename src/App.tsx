import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './page/components/header';
import Home from './page/home';
import About from './page/about/about';

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;