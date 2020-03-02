const React = require('react')
const Default = require('./layouts/default.jsx')
const HeaderPlain = require('./components/plain-header')
const Container = require('./sections/container.jsx')
const Row = require('./sections/row.jsx')
const Card = require('./components/card.jsx')
const SignUp = require('./components/signup-form.jsx')


const User = () => {
  return (
    <Default>
        <HeaderPlain />
        <Container>
            <div>
                <button type="button" id="signup" class="uk-button uk-button-text uk-width-1-2 uk-margin-left">Sign Up</button>
                <button type="button" id="login" class="uk-button uk-button-text uk-width-1-2 uk-margin-right">Log In</button>
            </div>
            <Card>
                <SignUp />
            </Card>
        </Container>
    </Default>
  )
}

module.exports = User
