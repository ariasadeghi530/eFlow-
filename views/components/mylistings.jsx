const React = require('react')

const MyListings = props => {
  return (
    <div>
      <h1 className="uk-text-bold uk-margin-left uk-text-large uk-flex-inline">My Listings</h1>
      <a href="/newListing"><button className="uk-align-right uk-button uk-button-primary uk-button-small uk-margin-right uk-text-center">Post New Listing</button></a>
        <ul className="uk-margin uk-margin-left uk-margin-right uk-list uk-list-striped">
            {props.children}
        </ul>
    </div>
  )
}

module.exports = MyListings
