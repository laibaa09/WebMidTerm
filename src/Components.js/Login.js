function Login
() {
    return ( 
        <div className="div4">
        <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Email: </b></label>
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
        <fieldset class="row mb-3">
        
          <div class="col-sm-10">
           
          </div>
        </fieldset>
        <div class="row mb-3">
          <div class="col-sm-10 offset-sm-2">
            
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
      </div>
     );
}

export default Login
;