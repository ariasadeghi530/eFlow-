const React = require('react')
const Default = require('./layouts/default.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
const Share = require('./components/share.jsx')
const Pricing = require('./components/pricing.jsx')
const Info = require('./components/productInfo.jsx')
const ProductSlider = require('./components/productPageSlider.jsx')
// const HeaderTwo = require('./components/headerTwo.jsx')

const Products = () => {
  return (
    <Default>
      <Breadcrumb />
      <div className="uk-margin-top uk-margin-left uk-margin-right">
        <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" width="500" height="500" alt="product-image" uk-img />
        <div className="uk-margin">
          <h1 className="uk-text-bold uk-text-center">Calum's Underwear</h1>
        </div>
      </div>
      <Share />
      <Pricing />
      <div className="uk-flex uk-flex-center">
        <p>
          <button class="uk-button uk-button-primary uk-button-medium bid-btn">Inquire</button>
        </p>
      </div>
      <Info />
      <ProductSlider />
    </Default>
  )
}

module.exports = Products
