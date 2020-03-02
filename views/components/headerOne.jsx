const React = require('react')

// Header with no navigation links - ONLY LOGO
const HeaderOne = () => {
  return (
    <nav className="uk-navbar uk-navbar-container uk-margin">
      <div class="uk-navbar-center">
        <a class="uk-navbar-item uk-logo" href="/">eFlow</a>
      </div>
    </nav>
  )
}

module.exports = HeaderOne
