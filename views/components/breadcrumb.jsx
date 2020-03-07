const React = require('react')


const Breadcrumb = (props) => {
  return (
    <div className="uk-margin-top uk-margin-left">
      <ul class="uk-breadcrumb">
        <li><a href="/">Home</a></li>
        <li><a href="/collections">Category</a></li>
        <li><span>Calum's Underwear</span></li>
      </ul>
    </div>
  )
}

module.exports = Breadcrumb
