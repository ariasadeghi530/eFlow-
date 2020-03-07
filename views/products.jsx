const React = require('react')
const Default = require('./layouts/default.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
const Share = require('./components/share.jsx')
const Pricing = require('./components/pricing.jsx')
const Info = require('./components/productInfo.jsx')
const ProductSlider = require('./components/productPageSlider.jsx')
const Footer = require('./components/footer.jsx')
const SidenavLink = require('./components/sidenavLink.jsx')
const Sidenav = require('./components/sidenav.jsx')

const Products = props => {
  console.log(props.prod.uploads)
  return (
    <Default>
      <Breadcrumb item={props.prod}/>
      <div className="uk-margin-top uk-margin-left uk-margin-right">
        <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" width="500" height="500" alt="product-image" uk-img />
        <div className="uk-flex uk-flex-center uk-margin-top">
          <ul className="uk-thumbnav" uk-margin>
            <li className="uk-active"><a href="#"><img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" width="100" alt="" /></a></li>
            <li><a href="#"><img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" width="100" alt="" /></a></li>
            <li><a href="#"><img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" width="100" alt="" /></a></li>
          </ul>
        </div>
        <div className="uk-margin">
          <h1 id="product-title" className="uk-text-bold uk-text-center">{props.prod.name}</h1>
        </div>
      </div>
      <Share />
      <Pricing stuff={props.prod}/>
      <div className="uk-flex uk-flex-center">
        <p>
          <button className="uk-button uk-button-primary uk-button-medium bid-btn">Inquire</button>
        </p>
      </div>
      <Info blah={props.prod}/>
      <ProductSlider />
      <Footer />
    </Default>
  ) 
}

module.exports = Products
