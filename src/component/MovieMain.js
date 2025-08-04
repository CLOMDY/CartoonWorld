import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useLocation } from 'react-router-dom';

import './styles/Player.css';

function MovieMain() {

    const location = useLocation();
    const { title, imgSrc} = location.state || {};
  return (
    <div className="container movieDis" style={{ marginTop: '21' }}>
        <hr/>
        <br/>
        <br/>
        <br/>
        <hr/>
        <div style={{ display: 'inline-block', position: 'relative', bottom: '564px' }}>
            <img 
                src={imgSrc}  
                alt="Thumbnail for Justice League" 
                style={{ border: '2px solid rgb(179, 179, 179)', borderRadius: '5px', width: '200px' }} 
            />
        </div>
        <div style={{ display: 'inline-block', marginLeft: '21px', marginRight: '21px', width: '43%', position: 'relative', bottom: '347px' }}>
            <div style={{ fontSize: '32px', color: 'white', fontWeight: '500', marginBottom: '15px' }}>
                {title}
            </div>
            <div>
                <div class="HDBtn1">
                    HD
                </div>
                <div style={{ fontSize: '12px', marginBottom: '8px', color: '#bababa' }}>
                    Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through
                    a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To
                    get back home, they'll have to master this world while embarking on a magical quest with an
                    unexpected, expert crafter, Steve.
                </div>
                <div class="row" style={{ fontSize: '12px', marginBottom: '8px', color: '#bababa' }}>
                    <div class="col-3">
                        Country:
                    </div>
                    <div class="col-9" style={{ color: '#ececec' }}>
                        Sweden, United States of America
                    </div>
                </div>
                <div class="row" style={{ fontSize: '12px', marginBottom: '8px', color: '#bababa' }}>
                    <div class="col-3">
                        Genre:
                    </div>
                    <div class="col-9" style={{ color: '#ececec' }}>
                        Family, Comedy, Adventure, Fantasy
                    </div>
                </div>
                <div class="row" style={{ fontSize: '12px', marginBottom: '8px', color: '#bababa' }}>
                    <div class="col-3">
                        Released:
                    </div>
                    <div class="col-9">
                        2025-03-31
                    </div>
                </div>
                <div class="row" style={{ fontSize: '12px', marginBottom: '8px', color: '#bababa' }}>
                    <div class="col-3">
                        Production:
                    </div>
                    <div class="col-9" style={{ color: '#ececec' }}>
                        Warner Bros. Pictures, Legendary Pictures, Mojang Studios, Vertigo Entertainment, On the Roam,
                        Domain Entertainment, Legendary Entertainment, Domain Entertainment
                    </div>
                </div>
                <div class="row" style={{ fontSize: '12px', marginBottom: '8px', color: '#bababa' }}>
                    <div class="col-3">
                        Casts:
                    </div>
                    <div className="col-9" style={{ color: '#ececec' }}>
                        Amanda Billing, Rachel House, Jared Hess, Danielle Brooks, Batanai Mashingaidze
                    </div>
                </div>
                <div className="row" style={{ fontSize: '12px', marginBottom: '8px', color: '#bababa' }}>
                    <div class="col-3">
                        Tags:
                    </div>
                    <div class="col-9">
                        Watch A Minecraft Movie Online Free, A Minecraft Movie Online Free, Where to watch A Minecraft
                        Movie, A Minecraft Movie movie free online, A Minecraft Movie free online
                    </div>
                </div>
            </div>

        </div>
        <div style={{ display: 'inline-block', width: '496px' }}>
            <div style={{ fontSize: '23px', position: 'relative', bottom: '7px', color: 'white', marginBottom: '0px' }}>
                You May Also Like
                <hr style={{ display: 'block', width: '125px', marginTop: '0px', marginBottom: '0px' }}/>
            </div>
            <div className="row" style={{ marginBottom: '21px' }}>
                <div class="col smallCol">
                    <a href="#!" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (7).jpg" alt="Thumbnail for Generator Rex"/>
                        </div>
                        <div class="titleName1">
                            Generator Rex
                        </div>
                        <div class="iconContent1">
                            <div class="iconYandDur1">
                                2025
                            </div>
                            <div class="iconDot1">
                                &#9679;
                            </div>
                            <div class="iconYandDur1">
                                101m
                            </div>
                            <div class="MorTY1">
                                Movie
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col smallCol">
                    <a href="#!" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (9).jpg" alt="Thumbnail for Teen Titans"/>
                        </div>
                        <div class="titleName1">
                            Teen Titans
                        </div>
                        <div class="iconContent1">
                            <div class="iconYandDur1">
                                2025
                            </div>
                            <div class="iconDot1">
                                &#9679;
                            </div>
                            <div class="iconYandDur1">
                                101m
                            </div>
                            <div class="MorTY1">
                                Movie
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col smallCol">
                    <a href="#!" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (10).jpg" alt="Thumbnail for Teenage Mutant Ninja Turtles"/>
                        </div>
                        <div class="titleName1">
                            Teenage Mutant Ninja Turtles
                        </div>
                        <div class="iconContent1">
                            <div class="iconYandDur1">
                                2025
                            </div>
                            <div class="iconDot1">
                                &#9679;
                            </div>
                            <div class="iconYandDur1">
                                101m
                            </div>
                            <div class="MorTY1">
                                Movie
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row" style={{ marginBottom: '21px' }}>
            <div class="col smallCol">
                    <a href="#!" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (5).jpg" alt="Thumbnail for Batman: The Animated Series"/>
                        </div>
                        <div class="titleName1">
                            Batman: The Animated Series
                        </div>
                        <div class="iconContent1">
                            <div class="iconYandDur1">
                                2025
                            </div>
                            <div class="iconDot1">
                                &#9679;
                            </div>
                            <div class="iconYandDur1">
                                101m
                            </div>
                            <div class="MorTY1">
                                Movie
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col smallCol">
                    <a href="#!" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (1).jpg" alt="Thumbnail for Kim Possible"/>
                        </div>
                        <div class="titleName1">
                            Kim Possible
                        </div>
                        <div class="iconContent1">
                            <div class="iconYandDur1">
                                2025
                            </div>
                            <div class="iconDot1">
                                &#9679;
                            </div>
                            <div class="iconYandDur1">
                                101m
                            </div>
                            <div class="MorTY1">
                                Movie
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col smallCol">
                    <a href="#!" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (2).jpg" alt="Thumbnail for Scooby-Doo! Mystery Incorporated"/>
                        </div>
                        <div class="titleName1">
                            Scooby-Doo! Mystery Incorporated
                        </div>
                        <div class="iconContent1">
                            <div class="iconYandDur1">
                                2025
                            </div>
                            <div class="iconDot1">
                                &#9679;
                            </div>
                            <div class="iconYandDur1">
                                101m
                            </div>
                            <div class="MorTY1">
                                Movie
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row" style={{ marginBottom: '21px' }}>
            <div class="col smallCol">
                    <a href="#!" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (11).jpg" alt="Thumbnail for The Avengers: Earth's Mightiest Heroes"/>
                        </div>
                        <div class="titleName1">
                            The Avengers: Earth's Mightiest Heroes
                        </div>
                        <div class="iconContent1">
                            <div class="iconYandDur1">
                                2025
                            </div>
                            <div class="iconDot1">
                                &#9679;
                            </div>
                            <div class="iconYandDur1">
                                101m
                            </div>
                            <div class="MorTY1">
                                Movie
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col smallCol">
                    <a href="#!" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (4).jpg" alt="Thumbnail for Samurai Jack"/>
                        </div>
                        <div class="titleName1">
                            Samurai Jack
                        </div>
                        <div class="iconContent1">
                            <div class="iconYandDur1">
                                2025
                            </div>
                            <div class="iconDot1">
                                &#9679;
                            </div>
                            <div class="iconYandDur1">
                                101m
                            </div>
                            <div class="MorTY1">
                                Movie
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col smallCol">
                    <a href="#!" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (6).jpg" alt="Thumbnail for Trollhunters: Tales of Arcadia"/>
                        </div>
                        <div class="titleName1">
                            Trollhunters: Tales of Arcadia
                        </div>
                        <div class="iconContent1">
                            <div class="iconYandDur1">
                                2025
                            </div>
                            <div class="iconDot1">
                                &#9679;
                            </div>
                            <div class="iconYandDur1">
                                101m
                            </div>
                            <div class="MorTY1">
                                Movie
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MovieMain;
