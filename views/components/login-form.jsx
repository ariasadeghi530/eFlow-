const React = require('react')

// Sign Up Form
const LogIn = () => {
    return (
        <form>
            <div className="uk-margin">
                <input type="text" className="uk-input" id="loginUsername" aria-describedby="emailHelp" placeholder="Username"></input>
            </div>
            <div className="uk-margin">
                <input type="password" className="uk-input" id="loginPassword" placeholder="Password"></input>
            </div>
            <div class="uk-flex uk-flex-right">
                <p><a href="#">Forgot Password?</a></p>
            </div>
            <button type="button" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Log In</button>
            <p class="font-weight-light">By loggin in you agree to our <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms Of Service</a> and <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a>.</p>
        </form>
    )
}

module.exports = LogIn
