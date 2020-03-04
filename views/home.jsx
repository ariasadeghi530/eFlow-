const React = require('react')
const Default = require('./layouts/default.jsx')
const HomeSlider = require('./components/homeSlider.jsx')
const CatSlider = require('./components/catSlider.jsx')

const Home = () => {
  return (
    <Default>
     <HomeSlider />
     <CatSlider />
      <h1>Hello world</h1>
      <h3 id="welcome"></h3>
      <button id="logout">Logout</button>
    </Default>
  )
}

module.exports = Home
