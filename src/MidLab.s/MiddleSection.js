
import { useState } from "react";
import pic1 from "../MidLab.s/Pictures/pic1.png";
import pic2 from "../MidLab.s/Pictures/pic2.webp";
import pic3 from "../MidLab.s/Pictures/pic3.webp";
import pic4 from "../MidLab.s/Pictures/pic4.webp";
function MiddleSection() {
   const[Card , setCard]=useState(
    [
      {id:1,paragragh:"SL need all the super league points they can get,as Afghanistan ODLs kicks off",paragragh2:"Bilateral ODIs might not excite too many but thers a world cup spot to nail down"},
      {id:2,paragragh:"SLC invites ICC Anti-Corruption Unit to investigate match-fixing allegations made in parliament" ,paragragh2:"MP Nalin Bandara claimed that the first Sri Lanka-Pakistan Test in July had been fixed, and said the board had become a gambling den"},
     

    ]
    );
    const handledelete=(id)=>{
      const updatedrecord=
      Card.filter((ref)=>
      ref?.id!==id)
      setCard(updatedrecord);
     }

   
    
    
        return (<div>
          <div >
              {Card.map((ab,key)=>(
             <div className="d-flex justify-content-between" >
             <div class="card" style={{width: "35rem"}}>
  <img src={pic1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text" ><b>{ab.paragragh}</b></p>
    <p class="card-text" >{ab.paragragh2} </p>
    <button onClick={()=>handledelete(ab.id)}>Delete</button>
  </div>

</div>


<div class="card" style={{width: "35rem"}}>
  <img src={pic2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text"><b>{ab.paragragh}</b></p>
    <p class="card-text">{ab.paragragh2}</p>
    <button onClick={()=>handledelete(ab.id)}>Delete</button>
  </div>

</div>

</div>

         
        ))

        }

        </div>
        </div>
         );
}


export default MiddleSection;