import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom';


function Caro() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide innerShadow"
        style={{ position: "absolute", top: "0px", width: "100%" }} data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-indicators" style={{ bottom: "30px" }}>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"
                aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7"
                aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8"
                aria-label="Slide 9"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9"
                aria-label="Slide 10"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10"
                aria-label="Slide 11"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11"
                aria-label="Slide 12"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./IMG/image-1896x760.jpg" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Justice League</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316.jpg", title: "Justice League", coverSrc: "/COVER PHOTO/image-1898x1120.jpg"}}>
                        <div class="watchBtn">
                            <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (1).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Kim Possible</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (1).jpg", title: "Kim Possible", coverSrc: "/COVER PHOTO/image-1898x1120 (1).jpg"}}>
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (2).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Scooby-Doo! Mystery Incorporated</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (2).jpg", title: "Scooby-Doo! Mystery Incorporated", coverSrc: "/COVER PHOTO/image-1898x1120 (2).jpg"}}>
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (3).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Avatar the Last Airbender</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (3).jpg", title: "Avatar the Last Airbender", coverSrc: "/COVER PHOTO/image-1898x1120 (3).jpg"}}>
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (4).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Samurai Jack</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (4).jpg", title: "Samurai Jack", coverSrc: "/COVER PHOTO/image-1898x1120 (4).jpg"}}>
                    
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (5).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Batman: The Animated Series</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (5).jpg", title: "Batman: The Animated Series", coverSrc: "/COVER PHOTO/image-1898x1120 (5).jpg"}}>
                    
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (6).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Trollhunters: Tales of Arcadia</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (6).jpg", title: "Trollhunters: Tales of Arcadia", coverSrc: "/COVER PHOTO/image-1898x1120 (6).jpg"}}>
                    
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (7).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Generator Rex</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (7).jpg", title: "Generator Rex", coverSrc: "/COVER PHOTO/image-1898x1120 (7).jpg"}}>
                    
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (8).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Ben 10</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (8).jpg", title: "Ben 10", coverSrc: "/COVER PHOTO/image-1898x1120 (8).jpg"}}>
                    
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (9).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Teen Titans</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (9).jpg", title: "Teen Titans", coverSrc: "/COVER PHOTO/image-1898x1120 (9).jpg"}}>
                    
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (10).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>Teenage Mutant Ninja Turtles</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (10).jpg", title: "Teenage Mutant Ninja Turtles", coverSrc: "/COVER PHOTO/image-1898x1120 (10).jpg"}}>
                    
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    </Link>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./IMG/image-1896x760 (11).jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block sliderContent carouselCaptionALign">
                    <h2>The Avengers: Earth's Mightiest Heroes</h2>
                    <div style={{ color: "#e1e1e1" }}>
                        <div class="HDBtn">
                            HD
                        </div>
                        <div class="DIG">
                            Duration: 2h 30m
                        </div>
                        <div class="DIG">
                            IDMB: 8.5
                        </div>
                        <div class="DIG">
                            Genre: Action, Adventure
                        </div>
                    </div>
                    <p class="carCap">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis eligendi magni delectus
                        recusandae enim esse exercitationem.</p>
                    <Link to="/movie" state={{imgSrc: "/THUMBNAIL/image-213x316 (11).jpg", title: "The Avengers: Earth's Mightiest Heroes", coverSrc: "/COVER PHOTO/image-1898x1120 (11).jpg"}}>
                    
                    <div class="watchBtn">
                        <i class="fa">&#xf04b;</i><span style={{ marginLeft: "5px" }}>Watch now</span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Caro;
