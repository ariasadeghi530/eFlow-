const React = require('react')
const Auth = require('./layouts/auth.jsx')

const Register = () => {
  return (
    <Auth>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-3">
            <div id="alerts" className="mt-2">
              
            </div>
            <div className="card mt-5">
              <div className="card-header">
                Join eFlow
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input type="first_name" className="form-control" id="first_name"></input>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="last_name" className="form-control" id="last_name"></input>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp"></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password"></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" className="form-control" id="password2"></input>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-link">Already have an account?</button>
                <a href="#" className="btn btn-primary float-right" id="register">Join</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  )
}

module.exports = Register
