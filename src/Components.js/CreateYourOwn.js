import { useState } from "react";

function CreateYourOwn() {
    const[Cloth,setCloth]=useState(
        [
            {type:1 ,fabric:"lawn", pieces:3, price:1500},
            {type:1 ,fabric:"cotton", pieces:3, price:1200},
            {type:1 ,fabric:"khadar", pieces:3, price:2000},
            {type:1 ,fabric:"linen", pieces:2, price:1000}
        ]
     
    )
   
    return ( 
        <div>
          
                <div className="d-flex">
                <h1>type:{Cloth.type}</h1>
                <h3>fabric: {Cloth.fabric}</h3>
                <h3>Pieces: {Cloth.pieces}</h3>
                <h4>Price: {Cloth.price}</h4>
                </div>

           
        </div>
     );
}

export default CreateYourOwn;