import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/Nav.css';

function Nav() {
  return (
    <div class="navb" style={{ position: 'absolute', zIndex: 5 }}>
        <div class="logo">
            <img src="/logo.png" alt="Logo" style={{ height: '80px' }} />

        </div>
        <div class="dp">
            <div class="dpb">Home</div>
        </div>
        <div class="dp">
            <button class="dpb">Genre</button>
            <div class="dp-content">
                <a href="#">Action</a>
                <a href="#">Action & Adventure</a>
                <a href="#">Adventure</a>
                <a href="#">Comedy</a>
                <a href="#">Fantasy</a>
                <a href="#">History</a>
                <a href="#">Horror</a>
                <a href="#">Slice of Life</a>
                <a href="#">Anime</a>
                <a href="#">Adult Animation</a>
                <a href="#">Animated Series</a>
                <a href="#">Stop Motion</a>
                <a href="#">Claymation</a>
                <a href="#">Animation Mixed with Live Action</a>


            </div>
        </div>
        <div class="dp">
            <button class="dpb">Country</button>
            <div class="dp-content">
                <a href="#">United States</a>
                <a href="#">Japan</a>
                <a href="#">France</a>
                <a href="#">Canada</a>
                <a href="#">India</a>
                <a href="#">South Korea</a>
                <a href="#">China</a>
                <a href="#">Russia</a>
                <a href="#">Australia</a>
            </div>
        </div>
        <div class="dp">
            <div class="dpb">Movie</div>
        </div>
        <div class="dp">
            <div class="dpb">TV Shows</div>
        </div>
        <div class="dp">
            <div class="dpb">Top IMDB</div>
        </div>
        <div class="dp">
            <form action="/action_page.php">
                <input type="text" placeholder="Enter Keywords..." name="search" class="search-box" />
                <button type="submit" class="search-button"><i class="fa fa-search"></i></button>
            </form>

        </div>
    </div>
  );
}

export default Nav;
