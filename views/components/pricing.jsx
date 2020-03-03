const React = require('react')
const Card = require('./card.jsx')
const Row = require('../sections/row.jsx')

const Pricing = props => {
  return (
    <Card>
      <Row>
        <div className="uk-flex uk-flex-center">
          <p className="">Retail Price: $420 | Condition: New</p>
        </div>
      </Row>
        <div className="uk-flex uk-flex-center uk-text-bold">
          <p>Asking Price:</p> 
        </div>
        <div className="uk-flex uk-flex-center">
          <p class="product-page-price uk-text-bold">$42,069</p>
        </div>
    </Card>
  )
}

module.exports = Pricing