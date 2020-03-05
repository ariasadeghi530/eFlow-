const React = require('react')

// Header with no navigation links - ONLY LOGO
const HeaderOne = () => {
  return (
    <nav className="uk-navbar uk-navbar-container uk-margin other-nav">
      <div className="uk-navbar-center">
        <a className="uk-navbar-item uk-logo other-nav-logo" href="/"><img src="../images/eflow_logo.png" alt="eFlow"></img></a>
      </div>
    </nav>
  )
}

module.exports = HeaderOne
