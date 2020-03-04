const React = require('react')

const Sidenav = () => {
  return (
    
    <div id="sidenav" uk-offcanvas="true">
      <div className="uk-offcanvas-bar uk-background-default esc-close">
        <a className="uk-logo sidebar-text uk-position-top-center" href="/">eFlow</a>
        <a className="uk-offcanvas-close sidebar-text" type="button"><i className="gg-close"></i></a>
        <h3 className="sidebar-header"><a href="/" id="userId" className="sidebar-text-list"><img src="https://www.aresprism.com/wp-content/uploads/2017/02/generic-user.png" id="user-img" alt="userImage" /><span id="side-username">Username</span></a></h3>
        <div className="uk-flex uk-flex-center">
          <ul className="uk-subnav uk-subnav-divider" uk-margin>
            <li><a href="/profile" className="sidebar-text">Profile</a></li>
            <li><a href="/chat" className="sidebar-text">Messages</a></li>
            <li><a href="#" className="sidebar-text">Support</a></li>
          </ul>
        </div>
        <h3 className=" sidebar-title"><a href="/collections" className="sidebar-text">Browse</a></h3>
        <div className="uk-tile-muted">
          <ul>
            <li><h4><a href="" className="sidebar-text-list">Category 1</a></h4></li>
            <li><h4><a href="" className="sidebar-text-list">Category 2</a></h4></li>
            <li><h4><a href="" className="sidebar-text-list">Category 3</a></h4></li>
            <li><h4><a href="" className="sidebar-text-list">Category 4</a></h4></li>
          </ul>
        </div>
        <h4 className="sidebar-text sidebar-title">Poop</h4>
      </div>
    </div>
  )
}

module.exports = Sidenav