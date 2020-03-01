const React = require('react')

// Header with no navigation links - ONLY LOGO
const MainHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-info">
                      <i className="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
            </div>
        </nav>
    )
}

module.exports = MainHeader
