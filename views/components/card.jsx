const React = require('react')

// Blank Card
const Card = props => {
  return (
    <div class="card">
         <div class="card-body">
            {props.children}
         </div>
     </div>
  )
}

module.exports = Card
