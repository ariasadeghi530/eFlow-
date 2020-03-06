const React = require('react')

const Sidenav = () => {
  return (
    
    <div id="sidenav" uk-offcanvas="true">
      <div className="uk-offcanvas-bar uk-background-default esc-close">
        <a className="uk-logo sidebar-text uk-position-top-center" href="/"><img src="../images/eflow_logo.png" alt="eFlow"></img></a>
        <a className="uk-offcanvas-close sidebar-text" type="button"><i className="gg-close"></i></a>
      {/*  */}
      <div className="uk-margin-small-left uk-margin-small-right">
        <ul uk-accordion="multiple: true">
          <li>
            <a class="uk-accordion-title sidebar-text" href="#">
            <h3 className="sidebar-header"><img src="https://www.aresprism.com/wp-content/uploads/2017/02/generic-user.png" id="user-img" alt="userImage" /><span id="side-username" className="sidebar-text">Username</span></h3>
            </a>
            <div class="uk-accordion-content">
              <div className="uk-flex uk-flex-center">
                <ul className="uk-subnav uk-subnav-divider" uk-margin>
                  <li><a href="/profile" className="sidebar-text">Profile</a></li>
                  <li><a href="/chat" className="sidebar-text">Messages</a></li>
                  <li><a href="#" className="sidebar-text">Support</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title sidebar-text">Browse</a>
            <div class="uk-accordion-content">
              <div className="uk-tile-muted">
                <ul>
                  <li><h4><a href="/collections" className="sidebar-text-list">Electronics</a></h4></li>
                  <li><h4><a href="/collections" className="sidebar-text-list">Apparel</a></h4></li>
                  <li><h4><a href="/collections" className="sidebar-text-list">Automotive</a></h4></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/*  */}
      
        
        
        <a href="/newListing"><h4 className="sidebar-text sidebar-title">Post New Listing</h4></a>
        <a href=""><h4 className="sidebar-text sidebar-title">FAQ</h4></a>
        <a href=""><h4 className="sidebar-text sidebar-title">About Us</h4></a>
        <a href=""><h4 className="sidebar-text sidebar-title">Contact Us</h4></a>
        <div className="uk-flex uk-flex-center">
          <button id="logout" className="uk-button uk-button-primary">Logout</button>
        </div>
      </div>
    </div>
  )
}

module.exports = Sidenav