const React = require('react')

const CategoryBanner = () => {
    return (
        <div class="uk-width-1-1 uk-visible@m uk-flex uk-flex-center uk-margin">
            <img className="ef-border-radius uk-margin-right" src="images/eflow-banner-left.jpg" width="350" height="350" alt=""/>
            <img className="ef-border-radius" src="images/eflow-banner-middle.jpg" width="350" height="350" alt=""/>
            <img className="ef-border-radius uk-margin-left" src="images/eflow-banner-right.jpg" width="350" height="350" alt=""/>
        </div>
    )
}

module.exports = CategoryBanner