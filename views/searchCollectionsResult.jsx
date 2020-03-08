const React = require('react')
const Default = require('./layouts/default.jsx')
const Collection = require('./components/collection.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
const Pagination = require('./components/pagination.jsx')
const Tile = require('./components/tile.jsx')

const Collections = (props) => {

  return (
    <div id='SearchResults'>
      <Tile categ={props.category} />
      {props.stuff.map((item) => <Collection card={item} />)}

    </div>
  )
}

module.exports = Collections