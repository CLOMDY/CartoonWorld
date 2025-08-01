import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/Movie copy.css';
import { useLocation } from 'react-router-dom';

function InnerShadow() {
  const [isPlaying, setIsPlaying] = useState(false);

  const location = useLocation();
  const {coverSrc} = location.state || {};

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className={`innerShadow1 ${isPlaying ? 'no-shadow' : ''}`}
      onClick={handlePlay}
      style={{ cursor: 'pointer' }}
    >
      {!isPlaying && (
        <>
          <div className="topIcon">
            <i
              className="fa"
              style={{
                position: 'relative',
                top: '29px',
                left: '38px',
                fontSize: '43px'
              }}
            >
              &#xf04b;
            </i>
          </div>
          <img src={coverSrc} style={{ width: '100%' }} alt="cover" />
        </>
      )}

      {isPlaying && (
        <video width="100%" controls autoPlay>
          <source src="/videos/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default InnerShadow;
