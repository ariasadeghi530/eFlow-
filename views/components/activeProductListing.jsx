const React = require('react')

// Blank Card
const ActiveProduct = props => {
  return (
    <a href={"/products/" + props.card.id}>
         <div className="uk-card uk-card-default uk-margin-bottom">
             <div className="uk-card-header">
                <img className="uk-align-left uk-width-1-2 uk-margin-remove" width="50" height="50" src={props.card.uploads.map(item => {return item.path})} />
                <div className="uk-align-right uk-width-1-2 uk-margin-remove">
                    <h3 className="uk-card-title uk-margin-left uk-margin-remove-bottom uk-text-truncate">{props.card.name}</h3>
                    <p className="uk-text-meta uk-margin-left uk-margin-remove-top">Asking Price: ${props.card.price}</p>
                    <div className="uk-flex uk-flex-center">
                      <button className="uk-button uk-button-primary">View</button>
                    </div>
                </div>
            </div>
        </div>
    </a>
  )
}

module.exports = ActiveProduct

