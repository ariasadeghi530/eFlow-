const React = require('react')
const Default = require('./layouts/default.jsx')
const MainHeader = require('./components/main-header.jsx')
const SideNav = require('./components/side-nav.jsx')
const Hero = require('./components/hero-banner.jsx')

const Home = () => {
  return (
    <Default>
      <MainHeader />
      <SideNav />
    </Default>
  )
}

module.exports = Home
