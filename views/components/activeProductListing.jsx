const React = require('react')

// Blank Card
const ActiveProduct = props => {
  return (
    <a href={"/products/" + props.card.id}>
         <div className="uk-card uk-card-default">
             <div className="uk-card-header">
                <div>
                    <img width="100" height="100" src={props.card.uploads.map(item => {return item.path})} />
                    <div className="uk-align-right">
                        <h3 className="uk-card-title uk-margin-remove-bottom">{props.card.name}</h3>
                        <p className="uk-text-meta uk-margin-remove-top">Asking Price: ${props.card.price}</p>
                        <button className="uk-button uk-button-primary">View Listing</button>
                    </div>
                </div>
            </div>
        </div>
    </a>
  )
}

module.exports = ActiveProduct

