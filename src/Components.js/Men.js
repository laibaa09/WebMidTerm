import menkurta from "../Images/menkurta.jpg"
import kurta2 from "../Images/kurta2.jpg"
import kurta3 from "../Images/kurta3.jpg"
import kurta4 from "../Images/kurta4.jpg"
import kurta5 from "../Images/kurta5.jpg"
import shirt1 from "../Images/shirt1.jpg"
import shirt2 from "../Images/shirt2.jpg"
import shirt3 from "../Images/shirt3.jpg"
import shirt4 from "../Images/shirt4.jpg"
import shirt5 from "../Images/shirt5.jpg"
import { Link } from "react-router-dom";

function Men() {
  

  function display(){
    console.log("displayed")
  }
    return (
      <div>
        <div className="mendiv">
          <div id="btn-div">
        <Link to={"CreateYourOwn"}>  <button onClick={display} className="creat-btn"> Create  Your Own </button></Link>
          </div>
          <div className="A">
         <b>Mens Clothings</b>
         </div>
        </div>
        <b>Kurtas:</b>
        <div className="mencardsdiv">
        <div className="firstcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={menkurta} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Brown Kurta</h5>
    <h6> 2000 PKR</h6>
    <Link to={"Products"}> View Details</Link>
    

  </div>
</div>
        </div>
        <div className="secondcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={kurta2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">White Kurta</h5>
    <h6> 2000 PKR</h6>
    <Link to={"Products"}> View Details</Link>
   

  </div>
</div>
        </div>
        <div className="thirdcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={kurta3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Black Kurta</h5>
    <h6> 2000 PKR</h6>
    <Link to={"Products"}> View Details</Link>
   

  </div>
</div>
        </div>
        <div className="fourthcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={kurta4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Maroon Kurta</h5>
    <h6> 2000 PKR</h6>
    <Link to={"Products"}> View Details</Link>
   

  </div>
</div>
        </div>
        <div className="fifthcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={kurta5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Blue Kurta</h5>
    <h6> 2000 PKR</h6>
    <Link to={"Products"}> View Details</Link>
   

  </div>
</div>
        </div>
        </div>
        
        <b>Sweat-Shirts and Hoodies:</b>
        <div className="mencardsdiv">
        <div className="mencardsdiv2">
        <div className="firstcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={shirt1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Hoody plus Sweat-Shirt</h5>
    <h6> 1500 PKR</h6>
    <Link to={"Products"}> View Details</Link>
    

  </div>
</div>
        </div>
        <div className="secondcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={shirt2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Black and White Hoody</h5>
    <h6> 1200 PKR</h6>
    <Link to={"Products"}> View Details</Link>
   

  </div>
</div>
        </div>
        <div className="thirdcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={shirt3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Grey Hoody</h5>
    <h6> 1200 PKR</h6>
    <Link to={"Products"}> View Details</Link>
   

  </div>
</div>
        </div>
        <div className="fourthcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={shirt4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">White and Blue Hoody</h5>
    <h6> 3000 PKR</h6>
    <Link to={"Products"}> View Details</Link>
   

  </div>
</div>
        </div>
        <div className="fifthcard">
        <div class="card" style={{width:"15rem"}}>
  <img src={shirt5} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Black Hoody</h5>
    <h6> 2000 PKR</h6>
    <Link to={"Products"}> View Details</Link>
   

  </div>
</div>
        </div>
        </div>
        </div>
       
        </div>
      );
}

export default Men;