const React = require('react')

const Collection = (props) => {

  return (
    <a href={"/products/" + props.card.id}>
    <div className="uk-flex-inline">
      <div class="uk-card uk-card-default uk-card-small">
        <div class="uk-card-media-top uk-flex uk-flex-center">
            <img src={props.card.uploads.map(item => {return item.path})} className="slider-img" alt="" />
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