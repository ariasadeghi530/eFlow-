const React = require('react')

// Sign Up Form
const SignUp = () => {
  return (
    <form>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <input type="first_name" className="form-control form-control-lg" id="first_name" placeholder="First Name"></input>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <input type="last_name" className="form-control form-control-lg" id="last_name" placeholder="Last Name"></input>
          </div>
        </div>
      </div>
      <hr />
      <div className="form-group">
        <input type="text" className="form-control form-control-lg" id="username" aria-describedby="emailHelp" placeholder="Username"></input>
      </div>
      <div className="form-group">
        <input type="email" className="form-control form-control-lg" id="email" aria-describedby="emailHelp" placeholder="Email"></input>
      </div>
      <div className="form-group">
        <input type="password" className="form-control form-control-lg" id="password" placeholder="Password"></input>
      </div>
      <div className="form-group">
        <input type="password" className="form-control form-control-lg" id="password2" placeholder="Confirm Password"></input>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
          <label class="form-check-label" for="invalidCheck">
            Agree to <a href="#">Terms Of Service</a> and <a href="#">Privacy Policy</a>. 
          </label>
          <div class="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <button id="register" type="button" class="btn btn-secondary btn-lg btn-block">Sign Up</button>
    </form>
  )
}

module.exports = SignUp
