const React = require('react')
const Default = require('../layouts/default.jsx')

const Home = () => {
  return (
    <Default>
      <h1>Hello world</h1>
      <button id="logout">Logout</button>
    </Default>
  )
}

module.exports = Home
