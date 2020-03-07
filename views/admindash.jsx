const React = require('react')
const Admin = require('./layouts/admin.jsx')


const Admindash = () => {
  return (
    <Admin>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="card mt-3">
            <div className="card-body">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Users</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Items</a>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row">
                    <div className="col-sm-4">
                      <div class="card mt-3">
                        <h5 class="card-header">Total Users</h5>
                        <div class="card-body">
                          <h5 class="card-title" id="totalUsers">0</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Active</th>
                        <th scope="col">Permissions</th>
                        <th scope="col">Join Date</th>
                        <th scope="col">Last Updated</th>
                        <th scope="col">Options</th>
                      </tr>
                    </thead>
                    <tbody id="userTable">

                    </tbody>
                  </table>
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  ...
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editTitle">Edit User - </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="user_id">User ID - </label><span id="user_id">0</span>
                </div>
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
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="checkActive"></input>
                      <label class="form-check-label" for="checkActive">Activated</label>
                    </div>
                  </div>  
                  <div className="col-md-6">
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="checkAdmin"></input>
                      <label class="form-check-label" for="checkAdmin">Is Admin</label>
                    </div>
                  </div>  
                </div> 
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" id="editUserSave" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </Admin>
          )
        }
        
        module.exports = Admindash
