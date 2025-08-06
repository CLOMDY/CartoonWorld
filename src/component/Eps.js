import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/Eps.css';

function Eps() {

    const renderEpisodes = (season, count) => {
        return (
            <div className="tab-pane fade show active" id={`list${season}`} role="tabpanel" aria-labelledby={`list${season}-tab`}>
                <div className="row g-3">
                    {Array.from({ length: count }).map((_, i) => (
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
                            <div className="episode-pill">
                                <span className="fw-semibold episode-label">Eps {i + 1}:</span>{' '}
                                <span className="episode-label">Episode #{season}.{i + 1}</span>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="container mt-5 pt-3">
            <ul className="nav nav-tabs mb-4 border-0" id="myTab" role="tablist">
                {[1, 2, 3].map((s, i) => (
                    <li className="nav-item" role="presentation" key={s}>
                        <button
                            className={`nav-link navbtn ${i === 0 ? 'active' : ''}`}
                            id={`list${s}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#list${s}`}
                            type="button"
                            role="tab"
                            aria-controls={`list${s}`}
                            aria-selected={i === 0 ? 'true' : 'false'}
                        >
                            Season {s}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="list1" role="tabpanel">
                    {renderEpisodes(1, 6)}
                </div>
                <div className="tab-pane fade" id="list2" role="tabpanel">
                    {renderEpisodes(2, 5)}
                </div>
                <div className="tab-pane fade" id="list3" role="tabpanel">
                    {renderEpisodes(3, 12)}
                </div>
            </div>
        </div>
    );
}

export default Eps;
