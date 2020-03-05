const React = require('react')
const Chat = require('./layouts/chat.jsx')

const UserChat = props => {
  return (
    <Chat>
      <div className="uk-container uk-margin-top">
        <div className="uk-column-1-8">
          <h3 className="uk-card-title">Conversations</h3>
          <div className="uk-card uk-card-default uk-card-body uk-height-small uk-overflow-auto">
            <ul class="uk-list uk-list-striped" id="conversations">
            </ul>
          </div>
          <div className="uk-card uk-card-default uk-card-body uk-overflow-auto uk-height-large" id="chatStream">
            <div className="uk-alert">
              <h4>No chat is loaded</h4>
            </div>
            <hr></hr>
          </div>
          <div>
            <div className="uk-card uk-card-primary uk-card-body">
              <div className="uk-margin" uk-margin>
                    <input className="uk-input uk-form-width-1-1" id="chatInput" type="text" placeholder="Enter a message..."></input>
                <button className="uk-button uk-button-default uk-margin-small-top" id="chatSend" style={{ float: "right" }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Chat>
  )
}

module.exports = UserChat
