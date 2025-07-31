import Nav from './component/Nav';
import InnerShadow from './component/InnerShadow';
import MovieMain from './component/MovieMain';
import AboutUs from './component/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Movie() {
  return (
    <>
      <Nav />
      <InnerShadow />
      <MovieMain />
      <AboutUs />
    </>
  );
}

export default Movie;
