const React = require('react')

const Sidenav = () => {
  return (
    <a href="#sidenav" uk-toggle></a>
    <div id="sidenav" uk-offcanvas>
      <div className="uk-offcanvas-bar uk-background-default esc-close">
        <a className="uk-logo sidebar-text uk-position-top-center" href="/">eFlow</a>
        <a className="uk-offcanvas-close sidebar-text" type="button"><i className="gg-close"></i></a>
        <h3 className="sidebar-text sidebar-title">Title</h3>
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