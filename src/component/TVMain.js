import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useLocation } from 'react-router-dom';

import './styles/Movie.css';

function TVMain() {
    const location = useLocation();
    const { title, imgSrc} = location.state || {};

  return (
    <div className="container" style={{ marginTop: '142px' }}>
        <ul class="nav nav-tabs" id="myTab" role="tablist" style={{ border: '0px', marginBottom: '20px' }}>
            <li class="nav-item" role="presentation">
                <button class="nav-link navbtn active" id="list1-tab" data-bs-toggle="tab" data-bs-target="#list1"
                    type="button" role="tab" aria-controls="list1" aria-selected="true">Season 1</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link navbtn" id="list2-tab" data-bs-toggle="tab" data-bs-target="#list2"
                    type="button" role="tab" aria-controls="list2" aria-selected="false">Season 2</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link navbtn" id="list3-tab" data-bs-toggle="tab" data-bs-target="#list3"
                    type="button" role="tab" aria-controls="list3" aria-selected="false">Season 3</button>
            </li>
        </ul>

        <div class="tab-content" id="myTabContent" style={{ marginTop: '10px' }}>
            <div class="tab-pane fade show active" id="list1" role="tabpanel" aria-labelledby="list1-tab">
                <div class="info">
                    <div class = "row">
                        <div class = "col-sm">
                            <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                                <span style={{ fontWeight: 500 }}>Eps 1: </span>Episode #1.1
                            </div>
                        </div>
                        <div class = "col-sm">
                            <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                                <span style={{ fontWeight: 500 }}>Eps 2: </span>Episode #1.2
                            </div>
                        </div>
                        <div class = "col-sm">
                            <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                                <span style={{ fontWeight: 500 }}>Eps 3: </span>Episode #1.3
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 4: </span>Episode #1.4
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 5: </span>Episode #1.5
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 6: </span>Episode #1.6
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="tab-pane fade show" id="list2" role="tabpanel" aria-labelledby="list2-tab">
                <div class="info">
                    <div class = "row">
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 1: </span>Episode #2.1
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 2: </span>Episode #2.2
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 3: </span>Episode #2.3
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 4: </span>Episode #2.4
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 5: </span>Episode #2.5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade show" id="list3" role="tabpanel" aria-labelledby="list3-tab">
                <div class="info">
                    <div class = "row">
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 1: </span>Episode #3.1
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 2: </span>Episode #3.2
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 3: </span>Episode #3.3
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 4: </span>Episode #3.4
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 5: </span>Episode #3.5
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 5: </span>Episode #3.5
                            </div>
                        </div>
                        
                    </div>
                    <div class = "row" style={{ marginTop: '10px' }}>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 1: </span>Episode #3.6
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 2: </span>Episode #3.7
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 3: </span>Episode #3.8
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 4: </span>Episode #3.9
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 5: </span>Episode #3.10
                            </div>
                        </div>
                        <div class = "col-sm">
                        <div style={{ borderRadius: '50px', backgroundColor: '#6c757d', color: '#111926', textAlign: 'center' }}>
                        <span style={{ fontWeight: 500 }}>Eps 5: </span>Episode #3.5
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>

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
        <div style={{ display: 'inline-block', width: '496px', marginTop: '28px' }}>
            <div style={{ fontSize: '23px', position: 'relative', bottom: '7px', color: 'white', marginBottom: '0px' }}>
                You May Also Like
                <hr style={{ display: 'block', width: '125px', marginTop: '0px', marginBottom: '0px' }}/>
            </div>
            <div className="row" style={{ marginBottom: '21px' }}>
                <div class="col smallCol">
                    <a href="" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (7).jpg"/>
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
                    <a href="" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (9).jpg"/>
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
                    <a href="" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (10).jpg"/>
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
                    <a href="" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (5).jpg"/>
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
                    <a href="" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (1).jpg"/>
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
                    <a href="" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (2).jpg"/>
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
                    <a href="" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (11).jpg"/>
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
                    <a href="" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (4).jpg"/>
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
                    <a href="" style={{textDecoration: "none", color: "white"}}>
                        <div class="thumb1">
                            <div class="iconBtn1">
                                <i className="fa" style={{ position: 'relative', top: '13px', left: '21px' }}>&#xf04b;</i>
                            </div>
                            <img class="iconImg1" src="./THUMBNAIL/image-213x316 (6).jpg"/>
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

export default TVMain;
