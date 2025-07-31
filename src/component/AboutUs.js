import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-title">About Us</div>
        <div className="about-text">
          Catroon World is a completely free cartoon streaming website with zero ads. You can watch your favorite
          animated series online in high quality, anytime you want, without spending a cent. Prefer to watch
          later? No problem—Catroon World also lets you download full cartoon episodes so you can enjoy them
          offline at your convenience.
        </div>
        <div className="about-note">
          This site does not store any files on our server, we only linked to the media which is hosted on 3rd
          party services.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
