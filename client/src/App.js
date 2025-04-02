import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Players from './pages/Players';
import Recruiters from './pages/Recruiters';
import Profile from './pages/Profile';
import HotClips from './pages/HotClips';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/recruiters" element={<Recruiters />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/hot-clips" element={<HotClips />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
