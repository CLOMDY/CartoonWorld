import Nav from './component/Nav';
import InnerShadow from './component/InnerShadow';
import AboutUs from './component/AboutUs';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TVMain from './component/TVMain';

function TV() {
  return (
    <>
      <Nav />
      <InnerShadow />
      <TVMain />
      <AboutUs />
    </>
  );
}

export default TV;
