const React = require('react')

// Header with no navigation links - ONLY LOGO
const HeaderOne = () => {
  return (
    <nav className="uk-navbar uk-navbar-container uk-margin">
      <div classNme="uk-navbar-center">
        <a className="uk-navbar-item uk-logo" href="/">eFlow</a>
      </div>
    </nav>
  )
}

module.exports = HeaderOne
