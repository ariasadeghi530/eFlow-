const React = require('react')
const Default = require('./layouts/default.jsx')
const Breadcrumb = require('./components/breadcrumb.jsx')
const Pricing = require('./components/pricing.jsx')
const Info = require('./components/productInfo.jsx')
const ProductSlider = require('./components/productPageSlider.jsx')
const Footer = require('./components/footer.jsx')
const SidenavLink = require('./components/sidenavLink.jsx')
const Sidenav = require('./components/sidenav.jsx')

const Products = props => {
  
  return (
    <Default>
      <div>
      <Breadcrumb item={props.prod}/>
      <div className="uk-margin-top uk-margin-left uk-margin-right">
        
        
        {/* {props.prod.uploads.map((item,index) => { 
          if(index === 0){
              return <img src={item.path} width="500" height="500" alt="product-image" uk-img /> }})} */}
          <div class="uk-position-relative uk-visible-toggle uk-light uk-margin-top" tabindex="-1" uk-slider="center: true">

            <ul class="uk-slider-items uk-grid">
          {props.prod.uploads.map((item, index) => {
           
              return (
                <li class="uk-width-3-4">
                  <div class="uk-panel" >
                    <img src={item.path}  alt="" />
                      </div>
                      </li>
                   )
                   })}
        
            </ul>
          </div>
        <div className="uk-margin">
          <h1 id="product-title" className="uk-text-bold uk-text-center">{props.prod.name}</h1>
        </div>
      </div>
      <Pricing stuff={props.prod}/>
      <div className="uk-flex uk-flex-center">
        <p>
          <button id={props.prod.userId} className="uk-button uk-button-primary uk-button-medium bid-btn">Inquire</button>
        </p>
      </div>
      <Info blah={props.prod}/>
      <ProductSlider blah={props.prod}/>
      <Footer />
      </div>
    </Default>
  ) 
}

module.exports = Products
