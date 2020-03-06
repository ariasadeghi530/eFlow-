const React = require('react')
const Default = require('./layouts/default.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
const Pagination = require('./components/pagination.jsx')
const Tile = require('./components/tile.jsx')

const Collections = () => {
  const collectionLoop = () => {
    
  }
  return (
    <Default>

      <Tile />
      <Breadcrumb />
      <div id="collection-body" className="uk-container"></div>
      </Default>
  )
}

module.exports = Collections