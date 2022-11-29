import React from "react";
import { Link } from "react-router-dom";
import maxi from "../Images/maxi.webp";
import {useState} from 'react';

 
function Cards() {
  const myStyle={
    color:"red"
  }
  
  const [quantity, setQuantity]= useState(1)
  const [Email, setEmail] = useState("");
  
  const handleChange = (e) => {
    const updatedEmail = e.currentTarget.value;
    
    setEmail(updatedEmail);
    
 
  }
  function ordered(){
    console.log("ordered")
  }
    const handleSubmit = (e) => {
      e.preventDefault();
  }
  
  
  
  function increase(){
    setQuantity(quantity+1)
  }
  function decrease(){
    setQuantity(quantity-1)
  }




    return (
      <div>

        <h2 className="women">Women Clothings </h2>
       <div className="cardDiv">
        <div class="card" style={{width:"15rem"}} > style={myStyle}
  <img src={maxi} class="card-img-top" alt="..."/>
  <div class="card-body" style={{color:"purple"}}>
    <h5 class="card-title">Maxi</h5>
    <p class="card-text">Embroidded Maxi </p>

    <Link to={"Products"}> View Details</Link>
    <br></br>
    <button onClick={ordered} type="button" class="btn btn-outline-primary"> Order</button>
    
   <h6>Quantity: </h6>
   <button onClick={increase}>+</button>
   {quantity}
   <button onClick={decrease}>-</button>
   <button type="button" onSubmit={handleSubmit} class="btn btn-outline-primary"> Submit </button>
  </div> 

</div>
<div className="cardform">

<form >
<h5 style={{color: "purple"}}> <b>login to Design your own..</b></h5>
         Email: <input type="text" value={Email} onChange={handleChange} />

                
        <button>LogIn</button>                                                                                          
            </form>
            {Email}
            
           
  
</div>


</div>

</div>
     );
    
}

export default Cards;


//Questions
//1)why react js is preferred as an industry technology today compare it with other web technology.
//Ans)React is a single page application which means it go from one page to another without reloading it
// is very fast , convinient,simple and modulor and it create a generate static websites. 75% of the IT companies use react for
//it saves time for boths client and developer

//2)List 5 frameworks that uses REACT js
//Ans)1. React bootstrap
//    2. Redux
//    3. Create React App
//    4. Material Kit React 