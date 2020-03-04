const React = require('react')

// Header with no navigation links - ONLY LOGO
const HeaderOne = () => {
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav className="uk-navbar uk-navbar-container uk-margin nav-margin">
        <div className="uk-navbar-center uk-padding-bottom">
          <a className="uk-navbar-item uk-logo" href="/">eFlow</a>
        </div>
      </nav>
    </div>
  )
}

module.exports = HeaderOne
