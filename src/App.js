import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
       <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/portfolio" element={<Portfolio />} />
             <Route path="/contact" element={<Contact />} />
           </Routes>

    </Router>
    
      
  );
}

export default App;
