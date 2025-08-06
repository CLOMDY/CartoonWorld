import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/Grid.css';
import movies from './Movies.json';
import { useNavigate } from 'react-router-dom';


function Grid() {
  const navigate = useNavigate();

  return (
    <div class="container" style={{ paddingTop: "40px", paddingBottom: "30px" }}>
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
        <li class=" nav-item" style={{ marginRight: "10px", fontSize: "31px", position: "relative", bottom: "7px", color: 'white' }}>
          Trending
          <hr style={{ display: "block", width: "80%", marginTop: "0px" }} />
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
                <div
                  className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1-5"
                  key={index}
                  style={{ padding: "5px", cursor: "pointer" }}
                  onClick={(e) => {
                    const type = e.currentTarget.querySelector(".MorTY")?.textContent;

                    if (type === "TV") {
                      navigate("/tv", {
                        state: {
                          imgSrc: movie.imgSrc,
                          title: movie.title,
                          coverSrc: movie.coverSrc,
                        },
                      });
                    } else if (type === "Movie") {
                      navigate("/movie", {
                        state: {
                          imgSrc: movie.imgSrc,
                          title: movie.title,
                          coverSrc: movie.coverSrc,
                        },
                      });
                    }
                  }}
                >
                  <div className="thumb">
                    <div className="iconBtn">
                      <i className="fa">&#xf04b;</i>
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
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="list2" role="tabpanel" aria-labelledby="list2-tab">
          <div class="info">
            <div className="row" style={{ marginBottom: "20px" }}>
              {movies.slice().reverse().map((movie, index) => (
                <div
                  className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1-5"
                  key={index}
                  style={{ padding: "5px", cursor: "pointer" }}
                  onClick={(e) => {
                    const type = e.currentTarget.querySelector(".MorTY")?.textContent;

                    if (type === "TV") {
                      navigate("/tv", {
                        state: {
                          imgSrc: movie.imgSrc,
                          title: movie.title,
                          coverSrc: movie.coverSrc,
                        },
                      });
                    } else if (type === "Movie") {
                      navigate("/movie", {
                        state: {
                          imgSrc: movie.imgSrc,
                          title: movie.title,
                          coverSrc: movie.coverSrc,
                        },
                      });
                    }
                  }}
                >
                  <div className="thumb">
                    <div className="iconBtn">
                      <i className="fa">&#xf04b;</i>
                    </div>
                    <img className="iconImg" src={movie.imgSrc} alt={movie.title} />
                  </div>

                  <div className="titleName">{movie.title}</div>
                  <div className="iconContent">
                    <div className="iconYandDur">{movie.year}</div>
                    <div className="iconDot">&#9679;</div>
                    <div className="iconYandDur">{movie.duration}</div>
                    <div className="MorTY">TV</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div style={{ marginRight: "10px", fontSize: "31px", position: "relative", bottom: "7px", color: 'white' }}>
          Latest Movies
          <hr style={{ display: "block", width: "125px", marginTop: "0px" }} />
        </div>
        <div class="row" style={{ marginBottom: "20px" }}>
          {movies.map((movie, index) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1-5"
              key={index}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={(e) => {
                const type = e.currentTarget.querySelector(".MorTY")?.textContent;

                if (type === "TV") {
                  navigate("/tv", {
                    state: {
                      imgSrc: movie.imgSrc,
                      title: movie.title,
                      coverSrc: movie.coverSrc,
                    },
                  });
                } else if (type === "Movie") {
                  navigate("/movie", {
                    state: {
                      imgSrc: movie.imgSrc,
                      title: movie.title,
                      coverSrc: movie.coverSrc,
                    },
                  });
                }
              }}
            >
              <div className="thumb">
                <div className="iconBtn">
                  <i className="fa">&#xf04b;</i>
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
            </div>
          ))}
        </div>
        <div style={{ marginRight: "10px", fontSize: "31px", position: "relative", bottom: "7px", color: 'white' }}>
          Latest TV Shows
          <hr style={{ display: "block", width: "125px", marginTop: "0px" }} />
        </div>
        <div className="row" style={{ marginBottom: "20px" }}>
          {movies.slice().reverse().map((movie, index) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1-5"
              key={index}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={(e) => {
                const type = e.currentTarget.querySelector(".MorTY")?.textContent;

                if (type === "TV") {
                  navigate("/tv", {
                    state: {
                      imgSrc: movie.imgSrc,
                      title: movie.title,
                      coverSrc: movie.coverSrc,
                    },
                  });
                } else if (type === "Movie") {
                  navigate("/movie", {
                    state: {
                      imgSrc: movie.imgSrc,
                      title: movie.title,
                      coverSrc: movie.coverSrc,
                    },
                  });
                }
              }}
            >

              <div className="thumb">
                <div className="iconBtn">
                  <i className="fa">&#xf04b;</i>
                </div>
                <img className="iconImg" src={movie.imgSrc} alt={movie.title} />
              </div>

              <div className="titleName">{movie.title}</div>
              <div className="iconContent">
                <div className="iconYandDur">{movie.year}</div>
                <div className="iconDot">&#9679;</div>
                <div className="iconYandDur">{movie.duration}</div>
                <div className="MorTY">TV</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginRight: "10px", fontSize: "31px", position: "relative", bottom: "7px", color: 'white' }}>
          Coming Soon
          <hr style={{ display: "block", width: "125px", marginTop: "0px" }} />
        </div>
        <div className="row" style={{ marginBottom: "20px" }}>
          {[...movies].sort(() => Math.random() - 0.5).map((movie, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-4 fixed-1of3"
              key={index}
              style={{ padding: "5px" }}
              onClick={(e) => {
                const type = e.currentTarget.querySelector(".MorTY")?.textContent;

                if (type === "TV") {
                  navigate("/tv", {
                    state: {
                      imgSrc: movie.imgSrc,
                      title: movie.title,
                      coverSrc: movie.coverSrc,
                    },
                  });
                } else if (type === "Movie") {
                  navigate("/movie", {
                    state: {
                      imgSrc: movie.imgSrc,
                      title: movie.title,
                      coverSrc: movie.coverSrc,
                    },
                  });
                }
              }}
            >

              <div className="thumb">
                <div className="iconBtn">
                  <i className="fa">&#xf04b;</i>
                </div>
                <img className="iconImg" src={movie.imgSrc} alt={movie.title} />
              </div>

              <div className="titleName">{movie.title}</div>
              <div className="iconContent">
                <div className="iconYandDur">{movie.year}</div>
                <div className="iconDot">&#9679;</div>
                <div className="iconYandDur">{movie.duration}</div>
                <div className="MorTY">
                  {Math.random() > 0.5 ? "Movie" : "TV"}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Grid;