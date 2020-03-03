const React = require('react')

const Info = () => {
  return (
    <ul class="uk-list uk-list-striped uk-margin-left uk-margin-right">
      <li className="uk-padding-remove-vertical uk-padding-remove-right">
        <h3 className="uk-text-small uk-text-bold uk-flex-inline">Retail Price:</h3>
        <p className="uk-flex-inline uk-margin-left product-price-secondary">$420</p>
      </li>
      <li>
        <h3 className="uk-text-small uk-text-bold">Description:</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae veritatis quod labore consequatur reiciendis veniam facere accusamus quae voluptatum obcaecati aperiam voluptates sapiente incidunt neque, modi officia, ipsum ex aut!</p>
      </li>
    </ul>
  )
}

module.exports = Info