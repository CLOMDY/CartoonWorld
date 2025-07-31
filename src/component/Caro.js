import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import movies from './Movies.json'; // your JSON data
import { useMemo } from 'react';
import './Caro.css';

function getRandomMovies(data, count = 12) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function Caro() {
    const randomMovies = useMemo(() => getRandomMovies(movies), [movies]);

    return (
        <div
            id="carouselExampleCaptions" 
            className="carousel slide responsive-carousel innerShadow"
            style={{ position: 'absolute', top: '0px', width: '100%' }}
            data-bs-ride="carousel"
            data-bs-interval="3000"
        >
            {/* Carousel Indicators */}
            <div className="carousel-indicators" style={{ bottom: '30px' }}>
                {randomMovies.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
                {randomMovies.map((movie, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={movie.title}>
                        <img src={movie.coverSrc} className="d-block w-100" alt={movie.title} />
                        <div className="carousel-caption carouselCaptionALign">
                            <h2>{movie.title}</h2>
                            <div style={{ color: '#e1e1e1' }}>
                                <div className="HDBtn">HD</div>
                                <div className="DIG">Duration: {movie.duration}</div>
                                <div className="DIG">IMDB: 8.5</div> {/* You can replace with movie.imdb if available */}
                                <div className="DIG">Genre: Action, Adventure</div> {/* Replace with actual genre if available */}
                            </div>
                            <p className="carCap">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptate culpa nulla nobis
                                eligendi magni delectus recusandae enim esse exercitationem.
                            </p>
                            <Link
                                to="/movie"
                                state={{
                                    imgSrc: movie.imgSrc,
                                    title: movie.title,
                                    coverSrc: movie.coverSrc,
                                }}
                            >
                                <div className="watchBtn">
                                    <i className="fa">&#xf04b;</i>
                                    <span style={{ marginLeft: '5px' }}>Watch now</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Caro;
