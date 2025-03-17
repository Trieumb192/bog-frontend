import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Vlog from './page/vlog/vlog';

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vlog" element={<Vlog />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;