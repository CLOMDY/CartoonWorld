import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';

import Movie from './Movie';
import MainIndex from './MainIndex';
import TV from './TV';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<TV />} />
      </Routes>
    </>
  );
}

export default App;
