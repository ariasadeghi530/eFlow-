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
                <button type="button" id="signup" class="btn w-50 p-3 mb-2 border-right border-bottom border-primary">Sign Up</button>
                <button type="button" id="login" class="btn w-50 p-3 mb-2">Log In</button>
            </div>
            <Card>
                <SignUp />
            </Card>
        </Container>
    </Default>
  )
}

module.exports = User
