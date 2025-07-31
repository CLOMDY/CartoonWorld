import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './Nav.css';

const navItems = [
  { label: 'Home' },
  {
    label: 'Genre',
    submenu: [
      'Action', 'Adventure', 'Comedy', 'Fantasy', 'Horror', 'Slice of Life'
    ]
  },
  {
    label: 'Country',
    submenu: [
      'United States', 'Japan', 'India', 'France', 'Korea'
    ]
  },
  { label: 'Movie' },
  { label: 'TV Shows' },
  { label: 'Top IMDB' }
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navb">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className="search-wrapper">
        <input type="text" placeholder="Search..." className="search-box" />
        <button className="search-button">
          <i className="fa fa-search" />
        </button>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa fa-bars" />
      </button>

      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        {navItems.map((item) => (
          <div className="dp" key={item.label}>
            <div
              className="dpb"
              onClick={() => {
                if (window.innerWidth <= 782 && item.submenu) {
                  const el = document.getElementById(`submenu-${item.label}`);
                  if (el) el.classList.toggle('show-mobile');
                }
              }}
            >
              {item.label}
            </div>

            {item.submenu && (
              <div className="dp-content" id={`submenu-${item.label}`}>
                {item.submenu.map((sub, i) => (
                  <a key={i} href="#">{sub}</a>
                ))}
              </div>
            )}
          </div>

        ))}
      </div>
    </nav>
  );
}

export default Nav;
