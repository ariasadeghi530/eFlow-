const React = require('react')
const Admin = require('./layouts/admin.jsx')

const Adminnewuser = (props) => {
  return (
    <Admin js={props.js} adminid={props.adminid}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div id="alerts">

            </div>
            <div class="card">
              <div class="card-header">
                New User
              </div>
              <div class="card-body">
                <form>

                  <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" class="form-control" id="first_name" aria-describedby="emailHelp"></input>
                  </div>
                  <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="form-control" id="last_name"></input>
                  </div>
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username"></input>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email"></input>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label> <span class="badge badge-secondary" id="showPassword">Show</span>
                    <input type="password" class="form-control" id="password"></input>
                  </div>
                  <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="checkAdmin"></input>
                    <label class="form-check-label" for="checkAdmin">Is Admin</label>
                  </div>
                </form>
              </div>
              <div class="card-footer text-muted">
                <button type="button" id="resetForm" class="btn btn-danger">Reset</button> 
                <button type="button" id="createUser" class="btn btn-success ml-3 float-right">Create User</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Admin>
  )
}

module.exports = Adminnewuser
