const React = require('react')

// Header with links
const HeaderTwo = (props) => {
    return (
        {/* <!-- NAVBAR  --> */}

        < div uk - sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" >
            <nav class="uk-navbar uk-navbar-container uk-margin">
                <div class="uk-navbar-left">
                    <a class="uk-navbar-toggle" uk-toggle="target: #sidenav" uk-navbar-toggle-icon href="#"></a>
                </div>
                <div class="uk-navbar-center">
                    <a class="uk-navbar-item uk-logo" href="/">eFlow</a>
                </div>
                <div class="uk-navbar-right">
                    <div class="uk-navbar-item">
                        <form action="javascript:void(0)">
                            <div class="uk-inline">
                                <a class="uk-form-icon" id="inputSearch" uk-icon="icon: search"></a>
                                <input class="uk-input uk-form-width-medium" type="text" placeholder="Search..." id="searchForm">
                            </div>
                                <button class="uk-button uk-button-default" id="search"><i class="gg-search"></i></button>
                                <button class="uk-button uk-button-default" id="close"><i class="gg-close"></i></button>
                         </form>
                     </div>
                </div>
                </nav>
            </div>
            
        {/* SIDENAV */}
        <a href="#sidenav" uk-toggle></a>
            <div id="sidenav" uk-offcanvas>
                <div class="uk-offcanvas-bar">
                    <button class="uk-offcanvas-close" type="button" uk-close></button>
             </div>
         </div>

            )
        }
        
        module.exports = HeaderTwo
