const React = require('react')
const Auth = require('./layouts/auth.jsx')

const Login = () => {
  return (
    <Auth>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-3">
            <div id="alerts" className="mt-2">
            </div>
            <div className="card mt-5">
              <div className="card-header">
                eFlow
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="loginUsername">Username</label>
                    <input type="text" className="form-control" id="loginUsername" aria-describedby="emailHelp"></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input type="password" className="form-control" id="loginPassword"></input>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <button type="button" className="btn btn-link">Need an account?</button>
                <a href="#" className="btn btn-primary float-right" id="login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  )
}

module.exports = Login
