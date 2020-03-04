const React = require('react')
const Default = require('./layouts/default.jsx')
const SidenavLink = require('./components/sidenavLink.jsx')
const Sidenav = require('./components/sidenav.jsx')

const Home = () => {
  return (
    <Default>
      <SidenavLink />
      <Sidenav />
      <h1>Hello world</h1>
      <h3 id="welcome"></h3>
      <button id="logout">Logout</button>
    </Default>
  )
}

module.exports = Home
