const React = require('react')

const WhatsHot = (props) => {
  console.log(props)
  return (
    <div className="uk-margin uk-margin-left uk-margin-right uk-hidden@m">
      <h3>{props.whats}</h3>
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="true">

        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
          {props.list.map(item => {
            return(
            <li className="home-sliders">
                <div class="uk-panel uk-card-home">
              <div className="uk-flex-inline">
                <div class="uk-card uk-card-default uk-card-small uk-card-home">
                  <div class="uk-card-media-top uk-flex uk-flex-center">
                    <img src={item.uploads.map(items => items.path)} className="slider-img" alt="" />
                  </div>
                  <div class="uk-card-body">
                    <p class="uk-text-bold slider-product-title slider-margin-bottom-remove">{item.name}</p>

                  </div>
                </div>
              </div>
            </div>
          </li>)})}
          
         
    </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>

    </div>
    
  )
}

module.exports = WhatsHot