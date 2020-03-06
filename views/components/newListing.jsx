const React = require('react')

// Sign Up Form
const NewListing = () => {
  return (
    <div className="uk-container">
    <form>
      <div id="alerts">
      </div>
      <div>
        <h3>Create a new listing</h3>
        <div className="uk-width-1-2@s uk-margin">
          <div className="form-group">
            <input type="first_name" className="uk-input" id="item_name" placeholder="Item Name"></input>
          </div>
        </div>
        <div className="uk-margin">
          <input type="text" className="uk-input" id="price" placeholder="Price"></input>
        </div>
        <div className="uk-width-1-2@s uk-margin">
          <div className="form-group">
            <select class="uk-select">
              <option id="Electronics">Electronics</option>
              <option id="Apparel">Apparel</option>
              <option id="Automotive">Automotive</option>
            </select>
          </div>
        </div>
      </div>
      <div className="uk-margin">
        <label ><input class="uk-radio" type="radio" name="New"/> New</label>
        <label className="uk-margin-small-left"><input class="uk-radio" type="radio" name="Used"/> Used</label>
          
      </div>

      <div className="uk-margin">
        <textarea id="description" className="uk-textarea" rows="5" placeholder="Description..."></textarea>
      </div>
        <div className="uk-margin">
          <input type="text" className="uk-input" id="image" placeholder="Image URL"></input>
        </div>

      <button type="button" id="postItem" className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" >Post Listing</button>
    </form>
    </div>
  )
}

module.exports = NewListing
