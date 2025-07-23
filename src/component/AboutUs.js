import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/Nav.css';

function AboutUs() {
  return (
    <div
        style={{ backgroundColor: "#0a1220", marginTop: "80px", width: "100%", position: "relative", top: "615px", boxShadow: "0px 0px 20px 20px #0a1220", height: "200px" }}>
        <div style={{ width: "555px", float: "right", marginRight: "50px", marginTop: "20px" }}>
            <div style={{ color: "white", fontSize: "25px" }}>
                About Us
            </div>
            <div style={{ fontSize: "11px", color: "#8b8b8b", marginTop: "10px", marginBottom: "10px" }}>
                Catroon World is a completely free cartoon streaming website with zero ads. You can watch your favorite
                animated series online in high quality, anytime you want, without spending a cent. Prefer to watch
                later? No problem—Catroon World also lets you download full cartoon episodes so you can enjoy them
                offline at your convenience.
            </div>
            <div style={{ fontStyle: "italic", fontSize: "10px", color: "#555555" }}>
                This site does not store any files on our server, we only linked to the media which is hosted on 3rd
                party services.
            </div>
        </div>
    </div>
  );
}

export default AboutUs;
