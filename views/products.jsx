const React = require('react')
const Default = require('./layouts/default.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
const Tags = require('./components/share.jsx')
// const HeaderTwo = require('./components/headerTwo.jsx')

const Products = () => {
  return (
    <Default>
      <Breadcrumb />
      <div className="uk-margin-top uk-margin-left uk-margin-right">
        <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" width="500" height="500" alt="product-image" uk-img />
        <div className="uk-margin">
          <h1 className="text-bold uk-text-center">Product Name Here</h1>
        </div>
      </div>
      <Share />
      
    </Default>
  )
}

module.exports = Products
