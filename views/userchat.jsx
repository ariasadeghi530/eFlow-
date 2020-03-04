const React = require('react')
const Chat = require('./layouts/chat.jsx')

const UserChat = props => {
  return (
    <Chat>
      <div className="uk-container">
        <div className="uk-column-1-8">
          <h3 className="uk-card-title">Conversations</h3>
          <div className="uk-card uk-card-default uk-card-body uk-height-small uk-overflow-auto">
            <ul class="uk-list uk-list-striped" id="conversations">
        
            </ul>
          </div>
          <div class="uk-card uk-card-default uk-card-body uk-overflow-auto uk-height-large" id="chatStream">
            <div className="uk-alert">
              <h4>Username</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <hr></hr>
          </div>
          <div>
            <div class="uk-card uk-card-primary uk-card-body">
              <div class="uk-margin" uk-margin>
                    <input class="uk-input uk-form-width-1-1" id="chatInput" type="text" placeholder="Enter a message..."></input>
                <button class="uk-button uk-button-default" id="chatSend" style={{ float: "right" }}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Chat>
  )
}

module.exports = UserChat
