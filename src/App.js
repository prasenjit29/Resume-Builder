import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ResumeBuilder from './components/ResumeBuilder';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/builder" element={<ResumeBuilder />} />
          <Route path="/templates" element={<ResumeBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
