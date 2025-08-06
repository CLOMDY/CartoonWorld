import Nav from './component/Nav';
import Player from './component/Player';
import AboutUs from './component/AboutUs';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Eps from './component/Eps';
import MovieDes from './component/MovieDes';

function TV() {
  return (
    <>
      <Nav />
      <Player />
      <Eps />
      <MovieDes/>
      <AboutUs />
    </>
  );
}

export default TV;
