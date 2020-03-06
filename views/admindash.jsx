const React = require('react')
const Admin = require('./layouts/admin.jsx')

const Admindash = (props) => {
  return (
    <Admin js={props.js} adminid={props.adminid}>
      <div className="container-fluid">
        <div class="container-fluid">
          <h1 class="mt-4">Dashboard</h1>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
          <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="card bg-primary text-white mb-4 shadow text-center">
                <div class="card-header">
                  Total Users
                </div>
                <div class="card-body">
                  <h1 class="display-4" id="userCount"></h1>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card bg-success text-white mb-4 shadow text-center">
                <div class="card-header">
                  Total Items
                </div>
                <div class="card-body">
                  <h1 class="display-4" id="itemCount"></h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            
          </div>
        </div>
      </div>
    </Admin>
  )
}

module.exports = Admindash
