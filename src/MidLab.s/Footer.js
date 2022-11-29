import { Link } from "react-router-dom";


function Footer() {
   
    return ( <div  className="d-flex justify-content-between" style={{width:"1000px"}}>
        <div id="div1">
            <ul>
            <h5><b>Key Series</b></h5>
            <Link to={"T20worldcup"}><li>T20 World Cup</li></Link>
            <Link><li>Austrailia Vs England</li></Link>
            <Link><li>New Zealan Vs India</li></Link>
            <Link><li>SriLanka Vs Afghanistan</li></Link>
            <Link><li>WBBL 2022</li></Link>
            <Link><li>Zarsh Cup</li></Link>
            <Link><li>World Cup Super League</li></Link>
            <Link><li>World Cup ChampianShip</li></Link>
            <Link to={"qeatrophy"}><li>QEA Trophy</li></Link>
            </ul>
        </div>
        <div id="div1">
            <ul>
            <h5><b>Quick Links</b></h5>
            <Link ><li>T20 Timeout</li></Link>
            <Link><li>T20 Time Out</li></Link>
            <Link><li>Fantasy Pick</li></Link>
            <Link><li>ICC Ratings</li></Link>
            </ul>
        </div>
        <div id="div1">
            <ul>
                <h5><b>ESPNcricinfo Apps</b></h5>
                <Link><li>Android Apps</li></Link>
            <Link to={"iosapp"}><li>iOS App</li></Link>
            
            </ul>
        </div>
        <div id="div1">
            <ul>
            <h5><b>ESPN sites</b></h5>
                <Link><li>The Cricket monthly</li></Link>
            <Link><li>ESPN</li></Link>
            </ul>
        </div>
    </div> );
}

export default Footer;