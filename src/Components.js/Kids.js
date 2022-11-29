import { useState } from "react";
import { Link } from "react-router-dom";

import casual1 from "../Images/casual1.jpg"
function Kids() {
    const[data,setData]=useState(
        [
            {id:1,Name:"romper",Price:"1200"},
            {id:2,Name:"Shirt and trouser",Price:"1200"},
            {id:3,Name:"kurta",Price:"1200"},
            {id:4,Name:"kurta",Price:"1200"},
            {id:5,Name:"kurta",Price:"1200"}
        ]
    )
    
    return ( <div >
       
        <div className="b"><b>Kids Section</b></div>
        <b>3 to 6 Months:</b>
         <div className="d-flex justify-content-between">
        {data.map((ab,key)=>(
             
             <div className="firstcard">
             <div class="card" style={{width:"15rem"}}>
       <img src="..." class="card-img-top" alt="..."/>
       <div class="card-body">
         <h5 class="card-title">{ab.Name}</h5>
         <h6> {ab.Price}</h6>
         <Link to={"Products"}> View Details</Link>
         
      
       </div>
     </div>
             </div>
             
             
        ))

        }
</div>
<div><b>1 t0 2 years</b></div>
<div className="d-flex justify-content-between">
        {data.map((ab,key)=>(
             
             <div className="firstcard">
             <div class="card" style={{width:"15rem"}}>
       <img src="..." class="card-img-top" alt="..."/>
       <div class="card-body">
         <h5 class="card-title">{ab.Name}</h5>
         <h6> {ab.Price}</h6>
         <Link to={"Products"}> View Details</Link>
         
      
       </div>
     </div>
             </div>
             
             
        ))

        }
</div>

    </div> );
}

export default Kids;