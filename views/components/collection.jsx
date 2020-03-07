const React = require('react')

const Collection = (props) => {
  
  return (
    <a href="/products">
    <div className="uk-flex-inline">
      <div class="uk-card uk-card-default uk-card-small">
        <div class="uk-card-media-top uk-flex uk-flex-center">
          <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" className="slider-img" alt="" />
        </div>
        <div class="uk-card-body">
  <p class="uk-text-bold slider-product-title slider-margin-bottom-remove">{props.card.name}</p>
          <p className="slider-margin-remove uk-text-light">Asking Price</p>
  <p className="uk-text-bold slider-price slider-margin-remove">${props.card.price}</p>
        </div>
      </div>
    </div>
    </a>
  )
}

module.exports = Collection