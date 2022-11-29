import { useState } from "react";
import{Link} from "react-router-dom";

import File2 from "./File2";
function File1() {
   const[data, setData]=useState(
      {color:"red"}
   );



    return ( 
        <div>
            
     <h3> Colors Available</h3>
    
      
      <File2  />
    </div>
     );
}

export default File1;