import Nav from './component/Nav';
import Caro from './component/Caro';
import Grid from './component/Grid';
import AboutUs from './component/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function MainIndex() {

  return (
    <>
      <Nav />
      <Caro />
      <Grid />
      <AboutUs />
    </>
  );
}

export default MainIndex;
