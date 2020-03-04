const React = require('react')

const HomeSlider = () => {
  return(
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 7:3; animation: push">

      <ul class="uk-slideshow-items">
        <li>
          <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" alt="" uk-cover />
        </li>
          <li>
          <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" alt="" uk-cover />
        </li>
            <li>
          <img src="https://x3g4v3s8.stackpathcdn.com/wp-content/uploads/2018/05/image-placeholder-500x500-4.jpg" alt="" uk-cover />
        </li>
       </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

          </div>
  )
}

module.exports = HomeSlider