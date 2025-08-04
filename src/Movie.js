import Nav from './component/Nav';
import Player from './component/Player';
import MovieMain from './component/MovieMain';
import AboutUs from './component/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Movie() {
  return (
    <>
      <Nav />
      <Player />
      <MovieMain />
      <AboutUs />
    </>
  );
}

export default Movie;
