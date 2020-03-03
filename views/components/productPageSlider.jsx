const React = require('react')

const ProductSlider = () => {
  return (
    <div className="uk-margin uk-margin-left uk-margin-right">
      <h3>Related Products</h3>
      <div uk-slider="center: true finite:true">
        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
          <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
            <li class="uk-child-width-1-2" uk-grid>
              <div className="uk-flex-inline">
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top uk-flex uk-flex-center">
                    <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" className="slider-img" alt="" />
                  </div>
                  <div class="uk-card-body">
                    <p class="uk-text-bold slider-product-title slider-margin-bottom-remove">Product Name</p>  
                    <p className="slider-margin-remove uk-text-light">Asking Price</p>                   
                    <p className="uk-text-bold slider-price slider-margin-remove">$420</p>
                  </div>
                  </div>
                </div>
                <div className="uk-flex-inline">
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top uk-flex uk-flex-center">
                      <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" className="slider-img" alt="" />
                    </div>
                    <div class="uk-card-body">
                      <p class="uk-text-bold slider-product-title slider-margin-bottom-remove">Product Name</p>
                      <p className="slider-margin-remove uk-text-light">Asking Price</p>     
                      <p className="uk-text-bold slider-price slider-margin-remove">$420</p>
                    </div>
                  </div>
                </div>
              </li>
            <li class="uk-child-width-1-2" uk-grid>
              <div className="uk-flex-inline">
                <div class="uk-card uk-card-default">
                  <div class="uk-card-media-top uk-flex uk-flex-center">
                    <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" className="slider-img" alt="" />
                  </div>
                  <div class="uk-card-body">
                    <p class="uk-text-bold slider-product-title slider-margin-bottom-remove">Product Name</p>  
                    <p className="slider-margin-remove uk-text-light">Asking Price</p>                   
                    <p className="uk-text-bold slider-price slider-margin-remove">$420</p>
                  </div>
                  </div>
                </div>
                <div className="uk-flex-inline">
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top uk-flex uk-flex-center">
                      <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" className="slider-img" alt="" />
                    </div>
                    <div class="uk-card-body">
                      <p class="uk-text-bold slider-product-title slider-margin-bottom-remove">Product Name</p>
                      <p className="slider-margin-remove uk-text-light">Asking Price</p>     
                      <p className="uk-text-bold slider-price slider-margin-remove">$420</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
              <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
              <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>
    </div>
  </div>
 )
}
                      
module.exports = ProductSlider

  