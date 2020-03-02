const React = require('react')

// Sign Up Form
const SignUp = () => {
  return (
    <form>
      <div>
        <div className="uk-width-1-2@s uk-margin">
          <div className="form-group">
            <input type="first_name" className="uk-input" id="first_name" placeholder="First Name"></input>
          </div>
        </div>
        <div className="uk-width-1-2@s uk-margin">
          <div className="form-group">
            <input type="last_name" className="uk-input" id="last_name" placeholder="Last Name"></input>
          </div>
        </div>
      </div>
      <hr />
      <div className="uk-margin">
        <input type="text" className="uk-input" id="username" aria-describedby="emailHelp" placeholder="Username"></input>
      </div>
      <div className="uk-margin">
        <input type="email" className="uk-input" id="email" aria-describedby="emailHelp" placeholder="Email"></input>
      </div>
      <div className="uk-margin">
        <input type="password" className="uk-input" id="password" placeholder="Password"></input>
      </div>
      <div className="uk-margin">
        <input type="password" className="uk-input" id="password2" placeholder="Confirm Password"></input>
      </div>
      <button type="button" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Sign Up</button>
    </form>
  )
}

module.exports = SignUp
