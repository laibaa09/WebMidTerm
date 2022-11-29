import { Link } from 'react-router-dom';
import './Style.css';
//import OIP from "../Images/OIP.jpg"
function header () {

   
    return ( <div>
      
        <div className='div1'>
         
            <h1 className="header">Style Yourself..!</h1>
            <div className='div3'>
            <Link to={"Login"}>
              <div id='login-btn'>
            <button type="button" class="btn btn-outline-secondary">
                
              <b>  Login</b>
                
            </button>
            </div>
            </Link>
            <Link to={"Signin"}> 
            <div id='signin-btn'>
            <button type="button" class="btn btn-outline-secondary">
              <b>Sign up</b>
                </button></div>
                </Link> 
                  </div>
                  </div>
        </div>
     );
}

export default header;
