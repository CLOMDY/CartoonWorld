
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Movie from "./Movie";
import MainIndex from './MainIndex';
import TV from './TV';

import ScrollToTop from './ScrollToTop';
// function Welcome(props) {
//   return alert(`Hello, ${props.name}`);
// }
function App() {

  return (
    <>
    {/* <Welcome name="User" /> */}
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
