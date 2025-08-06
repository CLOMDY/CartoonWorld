import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import movies from './Movies.json';
import './styles/MovieDes.css';

function MovieDes() {
    const location = useLocation();
    const { title } = location.state || {};
    const movie = movies.find(m => m.title === title);
    const navigate = useNavigate();

    if (!movie) {
        return <div className="container text-white mt-5">Movie not found.</div>;
    }

    const {
        imgSrc,
        genre,
        imdb,
        year,
        duration,
        type,
        country,
        released,
        production,
        casts,
        tags,
        "long-description": longDescription
    } = movie;


    const relatedMovies = movies.filter(m => m.title !== title).slice(0, 6);

    return (
        <div className="container-fluid px-4 py-4 movieDis text-white">
            <div className="row flex-column flex-md-row">
                {/* LEFT: Movie Info */}
                <div className="col-md-8 mb-4 mb-md-0">
                    <div className="d-flex flex-row flex-nowrap overflow-hidden" style={{ gap: '20px' }}>
                        <img src={imgSrc} alt={`Thumbnail for ${title}`} className="fixed-ratio-image" />


                        <div className="ms-md-4 movie-details-text">
                            <h2 className="fw-bold mb-2">{title}</h2>
                            <span className="HDBtn">HD</span>
                            <p>{longDescription}</p>


                            <div className="row" style={{ fontSize: '13px' }}>
                                <div className="col-3 text-secondary">Country:</div>
                                <div className="col-9">{country}</div>

                                <div className="col-3 text-secondary">Genre:</div>
                                <div className="col-9">{genre}</div>

                                <div className="col-3 text-secondary">Released:</div>
                                <div className="col-9">{released}</div>

                                <div className="col-3 text-secondary">Production:</div>
                                <div className="col-9">{production}</div>

                                <div className="col-3 text-secondary">Casts:</div>
                                <div className="col-9">{casts}</div>

                                <div className="col-3 text-secondary">Tags:</div>
                                <div className="col-9">{tags}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Related Movies */}
                <div className="col-md-4">
                    <h4 className="mb-2">You May Also Like</h4>
                    <hr style={{ width: '125px', marginTop: '0', marginBottom: '12px' }} />
                    <div className="row row-cols-3 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 " style={{ marginBottom: "20px" }}>
                        {[...movies]
                            .filter(movie => movie.title !== title)
                            .sort(() => 0.5 - Math.random())
                            .slice(0, 9)
                            .map((movie, index) => (
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
                                        <div className="iconBtn1">
                                            <i className="fa">&#xf04b;</i>
                                        </div>
                                        <img
                                            className="iconImg"
                                            src={movie.imgSrc}
                                            alt={movie.title}
                                            style={{ width: "100%", borderRadius: "5px" }}
                                        />
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
        </div >
    );
}

export default MovieDes;
