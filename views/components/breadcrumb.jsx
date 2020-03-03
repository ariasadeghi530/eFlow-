const React = require('react')


const Breadcrumb = () => {
  return (
    <div className="uk-margin-top uk-margin-left">
      <ul class="uk-breadcrumb">
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-disabled"><a>Disabled</a></li>
        <li><span>Active</span></li>
      </ul>
    </div>
  )
}

module.exports = Breadcrumb