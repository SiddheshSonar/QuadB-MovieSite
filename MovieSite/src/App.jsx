import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Summary from './pages/Summary';
import { useLocation } from 'react-router-dom';

const App = () => {
  const film = JSON.parse(localStorage.getItem('film'));
  console.log(film)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
          <Route path="/:filmName" element={<Summary film={film} />} />
      </Routes>
    </Router>
  );
};

export default App;
