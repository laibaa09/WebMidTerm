import './Mystyle.css';
import Leftsidebar from './Leftsidebar';

import MiddleSection from './MiddleSection';
import Teams from './Teams';
import Footer from './Footer';
import logo from "../MidLab.s/Pictures/logo.png";

function Grids() {
    return ( <div>
       
       <div class="container">
  
    <nav id='navbar' class="navbar navbar-expand-lg " style={{color:'white' , textAlign:'center'}}>
  <div class="container-fluid">
    <a class="navbar-brand" ></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       <div><img src={logo}></img></div>
      <li class="nav-item dropdown" >
          <a  class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white'}} >
            Live Score
          </a>
          <ul class="dropdown-menu" >
            <li>Live Score Home</li>
            <li>Results</li>
           <li>Seasons view</li>
           <li>Desktop Scoreboard</li>

          </ul>
        </li>
     <a class="nav-link" href="#" style={{color:'white'}}>Series</a>
     
        <a class="nav-link" href="#" style={{color:'white'}}>Teams</a>
     
        <a class="nav-link"href="#" style={{color:'white'}}>News</a>
        <a class="nav-link"href="#" style={{color:'white'}}>Features</a>
        <a class="nav-link"href="#" style={{color:'white'}}>Videos</a>
        <a class="nav-link"href="#" style={{color:'white'}}>Stats</a>
      </div>
    </div>
 
  </div>
</nav>
    
  <div class="row">
    <div id='col2' class="col ">
      <Leftsidebar/>
    </div>
    <div id='col3' class="col-6 ">
      <MiddleSection/>
    </div>
    <div id='col2' class="col ">
     
    <Teams/>
    </div>
  </div>
  <div class="row">
    <div id='footer' class="col">
      <Footer/>
    </div>
    
  </div>
</div>

    </div> );
}

export default Grids;