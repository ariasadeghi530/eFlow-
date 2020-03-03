const React = require('react')
const Chat = require('./layouts/chat.jsx')

const UserChat = props => {
  return (
    <Chat>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-header">
                Conversations
              </div>
              <div className="card-body">
                <ul class="list-group list-group-flush" id="conversations">
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </Chat>
  )
}

module.exports = UserChat
