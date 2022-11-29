import{Link} from "react-router-dom";
function Navbar() {
    return ( 
     

        <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <div class="modal-header">
  <div>
      <Link to={"Adminpage"}>
       <div id="adminbtn">
         <div id='de'></div>
        <div id="di"></div>
      <div id='de'></div>
     <div id="di"></div>
        <div id='de'> </div>
         </div>
           </Link> 
          </div>
                   
                 </div>
  <button type="button" class="btn btn-secondary" >
              <Link to={"home"}><b>Home</b></Link> 
  </button>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu">
            <li><Link to={"Men"}>Men</Link>
          </li>
            <li><Link to={"Women"}>Women</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link to={"Kids"}>Kids</Link></li>
          </ul>
        </li>
        <li class="nav-item">
         <button type="button" class="btn btn-secondary" id="aboutus" data-bs-target="#exampleModal">
           <Link to={"AboutUs"}><b> About Us</b> </Link></button>

        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">  </a>

        </li>
        <div>
           
           <button type="button" class="btn btn-secondary"    data-bs-toggle="modal" data-bs-target="#exampleModal">
             Contact Us
           </button>
           
           
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog">
               <div class="modal-content">
                 <div class="modal-header">
                   <h1 class="modal-title fs-5" id="exampleModalLabel">Contact Info:</h1>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div class="modal-body">
                   WhatsApp: 03095872549
                <br></br>
                   instagram: Laiba009

                 </div>
                 <div class="modal-footer">
                   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   
                 </div>
               </div>
             </div>
           </div>
                   </div>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    
  </div>
</nav>
</div>
     );
}

export default Navbar;