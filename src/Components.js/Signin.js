import { Link } from "react-router-dom";
function Signin() {
 
    return ( 
        <div className="div4">
        <form>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"><b>first name: </b></label>
          <div class="col-sm-10">
            <input type="first name" class="form-control" id="first name"/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"><b>Last name: </b></label>
          <div class="col-sm-10">
            <input type="Last name" class="form-control" id="Last name"/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"><b>User name: </b></label>
          <div class="col-sm-10">
            <input type="User name" class="form-control" id="user name"/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Email </b></label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3"/>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"><b>Password: </b></label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3"/>
          </div>
        </div>
       
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"><b>Confirm Password: </b></label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3"/>
          </div>
        
       
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label"><b>Phone no: </b></label>
          <div class="col-sm-10">
            <input type="Phone no" class="phoneno" id="Phone no"/>
          </div>
        </div>
        <fieldset class="row mb-3">
        
          <div class="col-sm-10">
           
          </div>
        </fieldset>
        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-2">
            
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <Link to={"Products"}> View Details</Link>
      </form>
      </div>
     );
}

export default Signin;