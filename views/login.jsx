const React = require('react')
const LogInDefault = require('./layouts/login.jsx')
const HeaderOne = require('./components/headerOne.jsx')

const Card = require('./components/card.jsx')
const LogIn = require('./components/login-form.jsx')

const User = () => {
  return (
    <LogInDefault>
      <HeaderOne />  
            <div>
              <button type="button" id="signup" className="uk-button uk-button-text uk-width-1-2">Sign Up</button>
              <button type="button" id="login" className="uk-button uk-button-text uk-width-1-2">Log In</button>
            </div>
            <Card>
              <LogIn />
            </Card>
    </LogInDefault>
  )
}

module.exports = User
