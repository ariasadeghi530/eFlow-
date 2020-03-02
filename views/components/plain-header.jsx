const React = require('react')

// Header with no navigation links - ONLY LOGO
const HeaderPlain = () => {
  return (
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <a class="navbar-brand" href="#">
                <img src="https://pngimage.net/wp-content/uploads/2018/06/logo-link-png.png" width="80" height="50" class="d-inline-block align-top" alt="" />
            </a>
        </li>
    </ul>
  )
}

module.exports = HeaderPlain
