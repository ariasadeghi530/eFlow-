const React = require('react')

const MyListings = props => {
  return (
    <div>
        <h1 className="uk-text-bold uk-margin-left uk-text-large">My Listings</h1>
        <ul className="uk-margin uk-margin-left uk-margin-right uk-list uk-list-striped">
            {props.children}
        </ul>
    </div>
  )
}

module.exports = MyListings
