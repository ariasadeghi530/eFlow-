const React = require('react')

const CatSlider = () => {
  return(
    // <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

    //     <ul class="uk-slider-items uk-subnav" uk-margin>
    //   <li className="uk-active"><a href="#" className="sidebar-text">Category 1</a></li>
    //     <li className="uk-active"><a href="#" className="sidebar-text">Category 2</a></li>
    //     <li className="uk-active"><a href="#" className="sidebar-text">Category 3</a></li>
    //     <li className="uk-active"><a href="#" className="sidebar-text">Category 4</a></li>
    // </ul>
    //   <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    //   <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
    // </div>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="true">

      <ul class="uk-slider-items">
      <li>
        <a href="/collections" className="sidebar-text">Category</a>
      </li>
          
    </ul>
                          <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                          <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
  )
}

module.exports = CatSlider