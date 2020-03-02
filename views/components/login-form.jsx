const React = require('react')

// Sign Up Form
const LogIn = () => {
    return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control form-control-lg" id="loginUsername" aria-describedby="emailHelp" placeholder="Username"></input>
            </div>
            <div className="form-group">
                <input type="password" className="form-control form-control-lg" id="loginPassword" placeholder="Password"></input>
            </div>
            <p class="font-weight-light float-right"><a href="#">Forgot Password?</a></p>
            <button type="button" class="btn btn-secondary btn-lg btn-block">Sign Up</button>
            <p class="font-weight-light">By loggin in you agree to our <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms Of Service</a> and <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a>.</p>
        </form>
    )
}

module.exports = LogIn
