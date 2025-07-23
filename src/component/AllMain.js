import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import './styles/Nav.css';
import movies from './Movies.json';
function AllMain() {
  return (
    <div style={{ top: "624px", position: "relative", color: "#b4b4b4" }} class="container">
      <p style={{ color: "#6c6c6c", fontSize: "14px", paddingTop: "20px", paddingBottom: "20px", textAlign: "center" }}>Are you
        a movie lover
        Are you a cartoon enthusiast searching for the ultimate site to watch your favorite animated series? Look no
        further—Catroon World has you covered!

        Catroon World is your go-to destination for watching and downloading thousands of animated shows in stunning
        HD quality, completely free of charge. No subscriptions, no sign-ups, and no hidden fees—just instant access
        to a massive library of cartoons for fans of all ages.

        Enjoy a seamless streaming experience with zero ads, and get premium-level features without ever reaching
        for your wallet. What’s more, if there’s a cartoon you can’t find, just let us know! We’re always adding new
        titles based on user requests to ensure you never miss a moment of animated fun.

        Catroon World isn’t just a site—it’s a community that puts animation lovers first. Check us out today—you’ll
        be glad you did!</p>
      <ul class="nav nav-tabs" id="myTab" role="tablist" style={{ border: "0px" }}>
        <li class=" nav-item" style={{ marginRight: "10px", fontSize: "31px", position: "relative", bottom: "7px" }}>
          Trending
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link navbtn active" id="list1-tab" data-bs-toggle="tab" data-bs-target="#list1"
            type="button" role="tab" aria-controls="list1" aria-selected="true"><i
              class="fa fa-play-circle mr-2"></i>Movies</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link navbtn" id="list2-tab" data-bs-toggle="tab" data-bs-target="#list2"
            type="button" role="tab" aria-controls="list2" aria-selected="false"><i
              class="fa fa-list mr-2"></i>TV Shows</button>
        </li>


      </ul>

      <div class="tab-content" id="myTabContent" style={{ marginTop: "10px" }}>
        <div class="tab-pane fade show active" id="list1" role="tabpanel" aria-labelledby="list1-tab">
          <div class="info">
            <div class="row" style={{ marginBottom: "20px" }}>
              {movies.map((movie, index) => (
                <div className="col" key={index} style={{ padding: "5px" }}>
                  <Link
                    to="/movie"
                    style={{ textDecoration: "none", color: "white" }}
                    state={{
                      imgSrc: movie.imgSrc,
                      title: movie.title,
                      coverSrc: movie.coverSrc,
                    }}
                  >
                    <div className="thumb">
                      <div className="iconBtn">
                        <i className="fa" style={{ position: "relative", top: "13px", left: "21px" }}>
                          &#xf04b;
                        </i>
                      </div>
                      <img className="iconImg" src={movie.imgSrc} alt={movie.title} />
                    </div>
                    <div className="titleName">{movie.title}</div>
                    <div className="iconContent">
                      <div className="iconYandDur">{movie.year}</div>
                      <div className="iconDot">&#9679;</div>
                      <div className="iconYandDur">{movie.duration}</div>
                      <div className="MorTY">{movie.type}</div>
                    </div>
                  </Link>
                </div>
              ))}
              {/* <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (1).jpg", title: "Kim Possible", coverSrc: "/COVER PHOTO/image-1898x1120 (1).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (1).jpg" />
                  </div>
                  <div class="titleName">
                    Kim Possible
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (2).jpg", title: "Scooby-Doo! Mystery Incorporated", coverSrc: "/COVER PHOTO/image-1898x1120 (2).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (2).jpg" />
                  </div>
                  <div class="titleName">
                    Scooby-Doo! Mystery Incorporated
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (3).jpg", title: "Avatar the Last Airbender", coverSrc: "/COVER PHOTO/image-1898x1120 (3).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (3).jpg" />
                  </div>
                  <div class="titleName">
                    Avatar the Last Airbender
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (4).jpg", title: "Samurai Jack", coverSrc: "/COVER PHOTO/image-1898x1120 (4).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (4).jpg" />
                  </div>
                  <div class="titleName">
                    Samurai Jack
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (5).jpg", title: "Batman: The Animated Series", coverSrc: "/COVER PHOTO/image-1898x1120 (6).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (5).jpg" />
                  </div>
                  <div class="titleName">
                    Batman: The Animated Series
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (6).jpg", title: "Trollhunters: Tales of Arcadia ", coverSrc: "/COVER PHOTO/image-1898x1120 (6).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (6).jpg" />
                  </div>
                  <div class="titleName">
                    Trollhunters: Tales of Arcadia                                </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (7).jpg", title: "Generator Rex", coverSrc: "/COVER PHOTO/image-1898x1120 (7).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (7).jpg" />
                  </div>
                  <div class="titleName">
                    Generator Rex                                </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div> */}
            </div>
            <div class="row" style={{ marginBottom: "20px" }}>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (8).jpg", title: "Ben 10", coverSrc: "/COVER PHOTO/image-1898x1120 (8).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (8).jpg" />
                  </div>
                  <div class="titleName">
                    Ben 10
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (9).jpg", title: "Teen Titans ", coverSrc: "/COVER PHOTO/image-1898x1120 (9).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (9).jpg" />
                  </div>
                  <div class="titleName">
                    Teen Titans                                </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (10).jpg", title: "Teenage Mutant Ninja Turtles", coverSrc: "/COVER PHOTO/image-1898x1120 (10).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (10).jpg" />
                  </div>
                  <div class="titleName">
                    Teenage Mutant Ninja Turtles                                </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (11).jpg", title: "The Avengers: Earth's Mightiest Heroes", coverSrc: "/COVER PHOTO/image-1898x1120 (11).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (11).jpg" />
                  </div>
                  <div class="titleName">
                    The Avengers: Earth's Mightiest Heroes
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (12).jpg", title: "Weathering with You", coverSrc: "/COVER PHOTO/image-1898x1120 (12).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (12).jpg" />
                  </div>
                  <div class="titleName">
                    Weathering with You

                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (13).jpg", title: "Suzume", coverSrc: "/COVER PHOTO/image-1898x1120 (13).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (13).jpg" />
                  </div>
                  <div class="titleName">
                    Suzume
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (14).jpg", title: "Naruto", coverSrc: "/COVER PHOTO/image-1898x1120 (14).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (14).jpg" />
                  </div>
                  <div class="titleName">
                    Naruto                                </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (15).jpg", title: "Doremon", coverSrc: "/COVER PHOTO/image-1898x1120 (15).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (15).jpg" />
                  </div>
                  <div class="titleName">
                    Doremon
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div class="row" style={{ marginBottom: "20px" }}>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (16).jpg", title: "Demon Slayer: Kimetsu no Yaiba", coverSrc: "/COVER PHOTO/image-1898x1120 (16).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (16).jpg" />
                  </div>
                  <div class="titleName">
                    Demon Slayer: Kimetsu no Yaiba
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (17).jpg", title: "Attack on Titan", coverSrc: "/COVER PHOTO/image-1898x1120 (17).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (17).jpg" />
                  </div>
                  <div class="titleName">
                    Attack on Titan
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (18).jpg", title: "Crayon Shin-chan", coverSrc: "/COVER PHOTO/image-1898x1120 (18).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (18).jpg" />
                  </div>
                  <div class="titleName">
                    Crayon Shin-chan
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (19).jpg", title: "Coco", coverSrc: "/COVER PHOTO/image-1898x1120 (19).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (19).jpg" />
                  </div>
                  <div class="titleName">
                    Coco
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (20).jpg", title: "How to Train Your Dragon ", coverSrc: "/COVER PHOTO/image-1898x1120 (20).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (20).jpg" />
                  </div>
                  <div class="titleName">
                    How to Train Your Dragon                                </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (21).jpg", title: "Your Name.", coverSrc: "/COVER PHOTO/image-1898x1120 (21).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (21).jpg" />
                  </div>
                  <div class="titleName">
                    Your Name.
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (22).jpg", title: "Ratatouille", coverSrc: "/COVER PHOTO/image-1898x1120 (22).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (22).jpg" />
                  </div>
                  <div class="titleName">
                    Ratatouille                                </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (23).jpg", title: "Big Hero 6", coverSrc: "/COVER PHOTO/image-1898x1120 (23).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (23).jpg" />
                  </div>
                  <div class="titleName">
                    Big Hero 6
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      Movie
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="list2" role="tabpanel" aria-labelledby="list2-tab">
          <div class="info">
            <div class="row" style={{ marginBottom: "20px" }}>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (23).jpg", title: "Big Hero 6", coverSrc: "/COVER PHOTO/image-1898x1120 (23).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (23).jpg" />
                  </div>
                  <div class="titleName">
                    Big Hero 6
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (22).jpg", title: "Ratatouille", coverSrc: "/COVER PHOTO/image-1898x1120 (22).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (22).jpg" />
                  </div>
                  <div class="titleName">
                    Ratatouille
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (21).jpg", title: "Your Name.", coverSrc: "/COVER PHOTO/image-1898x1120 (21).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (21).jpg" />
                  </div>
                  <div class="titleName">
                    Your Name.
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (20).jpg", title: "How to Train Your Dragon", coverSrc: "/COVER PHOTO/image-1898x1120 (20).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (20).jpg" />
                  </div>
                  <div class="titleName">
                    How to Train Your Dragon
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (19).jpg", title: "Coco", coverSrc: "/COVER PHOTO/image-1898x1120 (19).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (19).jpg" />
                  </div>
                  <div class="titleName">
                    Coco
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (18).jpg", title: "Crayon Shin-chan", coverSrc: "/COVER PHOTO/image-1898x1120 (18).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (18).jpg" />
                  </div>
                  <div class="titleName">
                    Crayon Shin-chan
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (17).jpg", title: "Attack on Titan", coverSrc: "/COVER PHOTO/image-1898x1120 (17).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (17).jpg" />
                  </div>
                  <div class="titleName">
                    Attack on Titan
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (16).jpg", title: "Demon Slayer: Kimetsu no Yaiba", coverSrc: "/COVER PHOTO/image-1898x1120 (16).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (16).jpg" />
                  </div>
                  <div class="titleName">
                    Demon Slayer: Kimetsu no Yaiba
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div class="row" style={{ marginBottom: "20px" }}>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (15).jpg", title: "Doremon", coverSrc: "/COVER PHOTO/image-1898x1120 (15).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (15).jpg" />
                  </div>
                  <div class="titleName">
                    Doremon
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (14).jpg", title: "Naruto", coverSrc: "/COVER PHOTO/image-1898x1120 (14).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (14).jpg" />
                  </div>
                  <div class="titleName">
                    Naruto
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (13).jpg", title: "Suzume", coverSrc: "/COVER PHOTO/image-1898x1120 (13).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (13).jpg" />
                  </div>
                  <div class="titleName">
                    Suzume
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (12).jpg", title: "Weathering with You", coverSrc: "/COVER PHOTO/image-1898x1120 (12).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (12).jpg" />
                  </div>
                  <div class="titleName">
                    Weathering with You
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (11).jpg", title: "The Avengers: Earth's Mightiest Heroes", coverSrc: "/COVER PHOTO/image-1898x1120 (11).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (11).jpg" />
                  </div>
                  <div class="titleName">
                    The Avengers: Earth's Mightiest Heroes
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (10).jpg", title: "Teenage Mutant Ninja Turtles ", coverSrc: "/COVER PHOTO/image-1898x1120 (10).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (10).jpg" />
                  </div>
                  <div class="titleName">
                    Teenage Mutant Ninja Turtles
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (9).jpg", title: "Teen Titans ", coverSrc: "/COVER PHOTO/image-1898x1120 (9).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (9).jpg" />
                  </div>
                  <div class="titleName">
                    Teen Titans
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (8).jpg", title: "Ben 10", coverSrc: "/COVER PHOTO/image-1898x1120 (8).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (8).jpg" />
                  </div>
                  <div class="titleName">
                    Ben 10
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div class="row" style={{ marginBottom: "20px" }}>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (7).jpg", title: "Generator Rex ", coverSrc: "/COVER PHOTO/image-1898x1120 (7).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (7).jpg" />
                  </div>
                  <div class="titleName">
                    Generator Rex
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (6).jpg", title: "Trollhunters: Tales of Arcadia ", coverSrc: "/COVER PHOTO/image-1898x1120 (6).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (6).jpg" />
                  </div>
                  <div class="titleName">
                    Trollhunters: Tales of Arcadia
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (5).jpg", title: "Batman: The Animated Series", coverSrc: "/COVER PHOTO/image-1898x1120 (5).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (5).jpg" />
                  </div>
                  <div class="titleName">
                    Batman: The Animated Series
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (4).jpg", title: "Samurai Jack", coverSrc: "/COVER PHOTO/image-1898x1120 (4).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (4).jpg" />
                  </div>
                  <div class="titleName">
                    Samurai Jack
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (3).jpg", title: "Avatar the Last Airbender", coverSrc: "/COVER PHOTO/image-1898x1120 (3).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (3).jpg" />
                  </div>
                  <div class="titleName">
                    Avatar the Last Airbender
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (2).jpg", title: "Scooby-Doo! Mystery Incorporated", coverSrc: "/COVER PHOTO/image-1898x1120 (2).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (2).jpg" />
                  </div>
                  <div class="titleName">
                    Scooby-Doo! Mystery Incorporated
                  </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (1).jpg", title: "Kim Possible", coverSrc: "/COVER PHOTO/image-1898x1120 (1).jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316 (1).jpg" />
                  </div>
                  <div class="titleName">
                    Kim Possible                                </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col" style={{ padding: "5px" }}>
                <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316.jpg", title: "Justice League ", coverSrc: "/COVER PHOTO/image-1898x1120.jpg" }}>
                  <div class="thumb">
                    <div class="iconBtn">
                      <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                    </div>
                    <img class="iconImg" src="./THUMBNAIL/image-213x316.jpg" />
                  </div>
                  <div class="titleName">
                    Justice League                                </div>
                  <div class="iconContent">
                    <div class="iconYandDur">
                      2025
                    </div>
                    <div class="iconDot">
                      &#9679;
                    </div>
                    <div class="iconYandDur">
                      101m
                    </div>
                    <div class="MorTY">
                      TV
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginRight: "10px", fontSize: "31px", position: "relative", bottom: "7px" }}>
          Latest Movies
          <hr style={{ display: "block", width: "125px", marginTop: "0px" }} />
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (1).jpg", title: "", coverSrc: "/COVER PHOTO/image-1898x1120 (1).jpg" }} state={{ imgSrc: "/THUMBNAIL/image-213x316.jpg", title: "Justice League", coverSrc: "/COVER PHOTO/image-1898x1120.jpg" }} >
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316.jpg" />
              </div>
              <div class="titleName">
                Justice League
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (1).jpg", title: "Kim Possible", coverSrc: "/COVER PHOTO/image-1898x1120 (1).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (1).jpg" />
              </div>
              <div class="titleName">
                Kim Possible
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (2).jpg", title: "Scooby-Doo! Mystery Incorporated", coverSrc: "/COVER PHOTO/image-1898x1120 (2).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (2).jpg" />
              </div>
              <div class="titleName">
                Scooby-Doo! Mystery Incorporated
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (3).jpg", title: "Avatar the Last Airbender", coverSrc: "/COVER PHOTO/image-1898x1120 (3).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (3).jpg" />
              </div>
              <div class="titleName">
                Avatar the Last Airbender
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (4).jpg", title: "Samurai Jack", coverSrc: "/COVER PHOTO/image-1898x1120 (4).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (4).jpg" />
              </div>
              <div class="titleName">
                Samurai Jack
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (5).jpg", title: "Batman: The Animated Series", coverSrc: "/COVER PHOTO/image-1898x1120 (6).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (5).jpg" />
              </div>
              <div class="titleName">
                Batman: The Animated Series
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (6).jpg", title: "Trollhunters: Tales of Arcadia ", coverSrc: "/COVER PHOTO/image-1898x1120 (6).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (6).jpg" />
              </div>
              <div class="titleName">
                Trollhunters: Tales of Arcadia                                </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (7).jpg", title: "Generator Rex", coverSrc: "/COVER PHOTO/image-1898x1120 (7).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (7).jpg" />
              </div>
              <div class="titleName">
                Generator Rex                                </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (8).jpg", title: "Ben 10", coverSrc: "/COVER PHOTO/image-1898x1120 (8).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (8).jpg" />
              </div>
              <div class="titleName">
                Ben 10
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (9).jpg", title: "Teen Titans ", coverSrc: "/COVER PHOTO/image-1898x1120 (9).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (9).jpg" />
              </div>
              <div class="titleName">
                Teen Titans                                </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (10).jpg", title: "Teenage Mutant Ninja Turtles", coverSrc: "/COVER PHOTO/image-1898x1120 (10).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (10).jpg" />
              </div>
              <div class="titleName">
                Teenage Mutant Ninja Turtles                                </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (11).jpg", title: "The Avengers: Earth's Mightiest Heroes", coverSrc: "/COVER PHOTO/image-1898x1120 (11).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (11).jpg" />
              </div>
              <div class="titleName">
                The Avengers: Earth's Mightiest Heroes
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (12).jpg", title: "Weathering with You", coverSrc: "/COVER PHOTO/image-1898x1120 (12).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (12).jpg" />
              </div>
              <div class="titleName">
                Weathering with You

              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (13).jpg", title: "Suzume", coverSrc: "/COVER PHOTO/image-1898x1120 (13).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (13).jpg" />
              </div>
              <div class="titleName">
                Suzume
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (14).jpg", title: "Naruto", coverSrc: "/COVER PHOTO/image-1898x1120 (14).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (14).jpg" />
              </div>
              <div class="titleName">
                Naruto                                </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (15).jpg", title: "Doremon", coverSrc: "/COVER PHOTO/image-1898x1120 (15).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (15).jpg" />
              </div>
              <div class="titleName">
                Doremon
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (16).jpg", title: "Demon Slayer: Kimetsu no Yaiba", coverSrc: "/COVER PHOTO/image-1898x1120 (16).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (16).jpg" />
              </div>
              <div class="titleName">
                Demon Slayer: Kimetsu no Yaiba
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (17).jpg", title: "Attack on Titan", coverSrc: "/COVER PHOTO/image-1898x1120 (17).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (17).jpg" />
              </div>
              <div class="titleName">
                Attack on Titan
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (18).jpg", title: "Crayon Shin-chan", coverSrc: "/COVER PHOTO/image-1898x1120 (18).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (18).jpg" />
              </div>
              <div class="titleName">
                Crayon Shin-chan
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (19).jpg", title: "Coco", coverSrc: "/COVER PHOTO/image-1898x1120 (19).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (19).jpg" />
              </div>
              <div class="titleName">
                Coco
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (20).jpg", title: "How to Train Your Dragon ", coverSrc: "/COVER PHOTO/image-1898x1120 (20).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (20).jpg" />
              </div>
              <div class="titleName">
                How to Train Your Dragon                                </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (21).jpg", title: "Your Name.", coverSrc: "/COVER PHOTO/image-1898x1120 (21).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (21).jpg" />
              </div>
              <div class="titleName">
                Your Name.
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (22).jpg", title: "Ratatouille", coverSrc: "/COVER PHOTO/image-1898x1120 (22).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (22).jpg" />
              </div>
              <div class="titleName">
                Ratatouille                                </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (23).jpg", title: "Big Hero 6", coverSrc: "/COVER PHOTO/image-1898x1120 (23).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (23).jpg" />
              </div>
              <div class="titleName">
                Big Hero 6
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div style={{ marginRight: "10px", fontSize: "31px", position: "relative", bottom: "7px" }}>
          Latest TV Shows
          <hr style={{ display: "block", width: "125px", marginTop: "0px" }} />
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (23).jpg", title: "Big Hero 6", coverSrc: "/COVER PHOTO/image-1898x1120 (23).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (23).jpg" />
              </div>
              <div class="titleName">
                Big Hero 6
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (22).jpg", title: "Ratatouille", coverSrc: "/COVER PHOTO/image-1898x1120 (22).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (22).jpg" />
              </div>
              <div class="titleName">
                Ratatouille
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (21).jpg", title: "Your Name.", coverSrc: "/COVER PHOTO/image-1898x1120 (21).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (21).jpg" />
              </div>
              <div class="titleName">
                Your Name.
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (20).jpg", title: "How to Train Your Dragon", coverSrc: "/COVER PHOTO/image-1898x1120 (20).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (20).jpg" />
              </div>
              <div class="titleName">
                How to Train Your Dragon
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (19).jpg", title: "Coco", coverSrc: "/COVER PHOTO/image-1898x1120 (19).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (19).jpg" />
              </div>
              <div class="titleName">
                Coco
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (18).jpg", title: "Crayon Shin-chan", coverSrc: "/COVER PHOTO/image-1898x1120 (18).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (18).jpg" />
              </div>
              <div class="titleName">
                Crayon Shin-chan
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (17).jpg", title: "Attack on Titan", coverSrc: "/COVER PHOTO/image-1898x1120 (17).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (17).jpg" />
              </div>
              <div class="titleName">
                Attack on Titan
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (16).jpg", title: "Demon Slayer: Kimetsu no Yaiba", coverSrc: "/COVER PHOTO/image-1898x1120 (16).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (16).jpg" />
              </div>
              <div class="titleName">
                Demon Slayer: Kimetsu no Yaiba
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (15).jpg", title: "Doremon", coverSrc: "/COVER PHOTO/image-1898x1120 (15).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (15).jpg" />
              </div>
              <div class="titleName">
                Doremon
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (14).jpg", title: "Naruto", coverSrc: "/COVER PHOTO/image-1898x1120 (14).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (14).jpg" />
              </div>
              <div class="titleName">
                Naruto
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (13).jpg", title: "Suzume", coverSrc: "/COVER PHOTO/image-1898x1120 (13).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (13).jpg" />
              </div>
              <div class="titleName">
                Suzume
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (12).jpg", title: "Weathering with You", coverSrc: "/COVER PHOTO/image-1898x1120 (12).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (12).jpg" />
              </div>
              <div class="titleName">
                Weathering with You
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (11).jpg", title: "The Avengers: Earth's Mightiest Heroes", coverSrc: "/COVER PHOTO/image-1898x1120 (11).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (11).jpg" />
              </div>
              <div class="titleName">
                The Avengers: Earth's Mightiest Heroes
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (10).jpg", title: "Teenage Mutant Ninja Turtles ", coverSrc: "/COVER PHOTO/image-1898x1120 (10).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (10).jpg" />
              </div>
              <div class="titleName">
                Teenage Mutant Ninja Turtles
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (9).jpg", title: "Teen Titans ", coverSrc: "/COVER PHOTO/image-1898x1120 (9).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (9).jpg" />
              </div>
              <div class="titleName">
                Teen Titans
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (8).jpg", title: "Ben 10", coverSrc: "/COVER PHOTO/image-1898x1120 (8).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (8).jpg" />
              </div>
              <div class="titleName">
                Ben 10
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (7).jpg", title: "Generator Rex ", coverSrc: "/COVER PHOTO/image-1898x1120 (7).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (7).jpg" />
              </div>
              <div class="titleName">
                Generator Rex
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (6).jpg", title: "Trollhunters: Tales of Arcadia ", coverSrc: "/COVER PHOTO/image-1898x1120 (6).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (6).jpg" />
              </div>
              <div class="titleName">
                Trollhunters: Tales of Arcadia
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (5).jpg", title: "Batman: The Animated Series", coverSrc: "/COVER PHOTO/image-1898x1120 (5).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (5).jpg" />
              </div>
              <div class="titleName">
                Batman: The Animated Series
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (4).jpg", title: "Samurai Jack", coverSrc: "/COVER PHOTO/image-1898x1120 (4).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (4).jpg" />
              </div>
              <div class="titleName">
                Samurai Jack
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (3).jpg", title: "Avatar the Last Airbender", coverSrc: "/COVER PHOTO/image-1898x1120 (3).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (3).jpg" />
              </div>
              <div class="titleName">
                Avatar the Last Airbender
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (2).jpg", title: "Scooby-Doo! Mystery Incorporated", coverSrc: "/COVER PHOTO/image-1898x1120 (2).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (2).jpg" />
              </div>
              <div class="titleName">
                Scooby-Doo! Mystery Incorporated
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (1).jpg", title: "Kim Possible", coverSrc: "/COVER PHOTO/image-1898x1120 (1).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (1).jpg" />
              </div>
              <div class="titleName">
                Kim Possible                                </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316.jpg", title: "Justice League ", coverSrc: "/COVER PHOTO/image-1898x1120.jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316.jpg" />
              </div>
              <div class="titleName">
                Justice League                                </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div style={{ marginRight: "10px", fontSize: "31px", position: "relative", bottom: "7px" }}>
          Coming Soon
          <hr style={{ display: "block", width: "125px", marginTop: "0px" }} />
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (14).jpg", title: "Naruto", coverSrc: "/COVER PHOTO/image-1898x1120 (14).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (14).jpg" />
              </div>
              <div class="titleName">
                Naruto
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (20).jpg", title: "how to train your dragon", coverSrc: "/COVER PHOTO/image-1898x1120 (20).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (20).jpg" />
              </div>
              <div class="titleName">
                how to train your dragon
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (7).jpg", title: "Generator Rex", coverSrc: "/COVER PHOTO/image-1898x1120 (7).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (7).jpg" />
              </div>
              <div class="titleName">
                Generator Rex
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (2).jpg", title: "Scooby-Doo! Mystery Incorporated", coverSrc: "/COVER PHOTO/image-1898x1120 (2).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (2).jpg" />
              </div>
              <div class="titleName">
                Scooby-Doo! Mystery Incorporated

              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (11).jpg", title: "The Avengers: Earth's Mightiest Heroes", coverSrc: "/COVER PHOTO/image-1898x1120 (11).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (11).jpg" />
              </div>
              <div class="titleName">
                The Avengers: Earth's Mightiest Heroes
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (13).jpg", title: "Suzume", coverSrc: "/COVER PHOTO/image-1898x1120 (13).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (13).jpg" />
              </div>
              <div class="titleName">
                Suzume
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (5).jpg", title: "Batman: The Animated Series", coverSrc: "/COVER PHOTO/image-1898x1120 (5).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (5).jpg" />
              </div>
              <div class="titleName">
                Batman: The Animated Series
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (22).jpg", title: "Ratatouille", coverSrc: "/COVER PHOTO/image-1898x1120 (22).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (22).jpg" />
              </div>
              <div class="titleName">
                Ratatouille
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (16).jpg", title: "Demon Slayer: Kimetsu no Yaiba", coverSrc: "/COVER PHOTO/image-1898x1120 (16).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (16).jpg" />
              </div>
              <div class="titleName">
                Demon Slayer: Kimetsu no Yaiba

              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (23).jpg", title: "Big Hero 6", coverSrc: "/COVER PHOTO/image-1898x1120 (23).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (23).jpg" />
              </div>
              <div class="titleName">
                Big Hero 6
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (15).jpg", title: "Doremon", coverSrc: "/COVER PHOTO/image-1898x1120 (15).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (15).jpg" />
              </div>
              <div class="titleName">
                Doremon
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (9).jpg", title: "Teen Titans", coverSrc: "/COVER PHOTO/image-1898x1120 (9).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (9).jpg" />
              </div>
              <div class="titleName">
                Teen Titans
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316.jpg", title: "Justice League", coverSrc: "/COVER PHOTO/image-1898x1120.jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316.jpg" />
              </div>
              <div class="titleName">
                Justice League
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (4).jpg", title: "Samurai Jack", coverSrc: "/COVER PHOTO/image-1898x1120 (4).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (4).jpg" />
              </div>
              <div class="titleName">
                Samurai Jack

              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (21).jpg", title: "Your Name.", coverSrc: "/COVER PHOTO/image-1898x1120 (21).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (21).jpg" />
              </div>
              <div class="titleName">
                Your Name.

              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (17).jpg", title: "Attack on Titan", coverSrc: "/COVER PHOTO/image-1898x1120 (17).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (17).jpg" />
              </div>
              <div class="titleName">
                Attack on Titan
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (12).jpg", title: "Weathering with You", coverSrc: "/COVER PHOTO/image-1898x1120 (12).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (12).jpg" />
              </div>
              <div class="titleName">
                Weathering with You
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (18).jpg", title: "Crayon Shin-chan", coverSrc: "/COVER PHOTO/image-1898x1120 (18).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (18).jpg" />
              </div>
              <div class="titleName">
                Crayon Shin-chan

              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/tv" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (1).jpg", title: "Kim Possible", coverSrc: "/COVER PHOTO/image-1898x1120 (1).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (1).jpg" />
              </div>
              <div class="titleName">
                Kim Possible
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  TV
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (19).jpg", title: "Coco", coverSrc: "/COVER PHOTO/image-1898x1120 (19).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (19).jpg" />
              </div>
              <div class="titleName">
                Coco
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (6).jpg", title: "Trollhunters: Tales of Arcadia", coverSrc: "/COVER PHOTO/image-1898x1120 (6).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (6).jpg" />
              </div>
              <div class="titleName">
                Trollhunters: Tales of Arcadia
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (10).jpg", title: "Teenage Mutant Ninja Turtles", coverSrc: "/COVER PHOTO/image-1898x1120 (10).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (10).jpg" />
              </div>
              <div class="titleName">
                Teenage Mutant Ninja Turtles
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (8).jpg", title: "Ben 10", coverSrc: "/COVER PHOTO/image-1898x1120 (8).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (8).jpg" />
              </div>
              <div class="titleName">
                Ben 10
              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
          <div class="col" style={{ padding: "5px" }}>
            <Link to="/movie" style={{ textDecoration: "none", color: "white" }} state={{ imgSrc: "/THUMBNAIL/image-213x316 (3).jpg", title: "Avatar the Last Airbender", coverSrc: "/COVER PHOTO/image-1898x1120 (3).jpg" }}>
              <div class="thumb">
                <div class="iconBtn">
                  <i class="fa" style={{ position: "relative", top: "13px", left: "21px" }}>&#xf04b;</i>
                </div>
                <img class="iconImg" src="./THUMBNAIL/image-213x316 (3).jpg" />
              </div>
              <div class="titleName">
                Avatar the Last Airbender

              </div>
              <div class="iconContent">
                <div class="iconYandDur">
                  2025
                </div>
                <div class="iconDot">
                  &#9679;
                </div>
                <div class="iconYandDur">
                  101m
                </div>
                <div class="MorTY">
                  Movie
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllMain;