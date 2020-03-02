const React = require('react')

// Header with links
const HeaderTwo = (props) => {
    return (
        {/* <!-- NAVBAR  --> */}
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav className="uk-navbar uk-navbar-container uk-margin">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-toggle" uk-toggle="target: #sidenav" uk-navbar-toggle-icon href="#"></a>
                </div>
                <div className="uk-navbar-center">
                    <a className="uk-navbar-item uk-logo" href="/">eFlow</a>
                </div>
                <div className="uk-navbar-right">
                    <div className="uk-navbar-item">
                        <form action="javascript:void(0)">
                            <input className="uk-input uk-form-width-medium" type="text" placeholder="Search..." id="searchForm"></input>
                                <button className="uk-button uk-button-default" id="search"><i className="gg-search"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- SIDENAV --> */}
        <a href="#sidenav" uk-toggle></a>
            <div id="sidenav" uk-offcanvas>
                <div className="uk-offcanvas-bar">
                    <button className="uk-offcanvas-close" type="button" uk-close></button>
                </div>
            </div>

            )
        }
        
        module.exports = HeaderTwo
