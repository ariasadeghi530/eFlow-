const React = require('react')

const CatSlider = () => {
  return(

  <div className="uk-container">
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="finite: true">

        <ul class="uk-slider-items  uk-grid">
          <li className="cat-width">
          <div class="uk-panel">
              <a href="/collections"><h4 className="sidebar-text">Category</h4></a>
            </div>
          </li>
        <li className="cat-width">

            <div class="uk-panel">
              <a href="/collections"><h4 className="sidebar-text">Category</h4></a>
            </div>

          </li>
        <li className="cat-width">

            <div class="uk-panel">
              <a href="/collections"><h4 className="sidebar-text">Category</h4></a>
            </div>

          </li>
        <li className="cat-width">

            <div class="uk-panel">
              <a href="/collections"><h4 className="sidebar-text">Category</h4></a>
            </div>

          </li>
        <li className="cat-width">

            <div class="uk-panel">
              <a href="/collections"><h4 className="sidebar-text">Category</h4></a>
            </div>

          </li>
       
          
        
        </ul>

        
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

      </div>
    </div>

  )
}

module.exports = CatSlider