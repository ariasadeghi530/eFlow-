const React = require('react')

const Collection = (props) => {

  return (
    <a href={"/products/" + props.card.id}>
    <div className="uk-flex-inline">
      <div class="uk-card uk-card-default uk-card-small uk-card-collection" >
        <div class="uk-card-media-top uk-flex uk-flex-center">
            <img src={props.card.uploads.map((item,index,arr) => {
             
              if(arr.length > 0){
                 return item.path 
              } else{
                return "https://firebasestorage.googleapis.com/v0/b/eflow-ca056.appspot.com/o/images%2Ffavicon.ico?alt=media&token=138b2db8-1d86-40be-b312-3a676fd4448a"
              }
              })} className="slider-img" alt="" />
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

