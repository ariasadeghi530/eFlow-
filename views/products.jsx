const React = require('react')
const Default = require('./layouts/default.jsx')
// const HeaderTwo = require('./components/headerTwo.jsx')

const Products = () => {
  return (
    <Default>
      <div className="uk-margin">
        <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" width="500" height="500" alt="product-image" uk-img />
      </div>
    </Default>
  )
}

module.exports = Products
