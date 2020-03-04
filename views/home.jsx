const React = require('react')
const Default = require('./layouts/default.jsx')
const HomeSlider = require('./components/homeSlider.jsx')
const CatSlider = require('./components/catSlider.jsx')
const WhatsHot = require('./components/whatsHot.jsx')
const Footer = require('./components/footer.jsx')

const Home = (props) => {
  return (
    <Default>
     <HomeSlider />
     <CatSlider />
      <WhatsHot whats={props.whatsHot} />
      <WhatsHot whats={props.whatsNew} />
      <div className="uk-container">
        <div className="spacer"></div>
      </div>
      <Footer />
    </Default>
  )
}

module.exports = Home
