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
                <ul className="list-group list-group-flush" id="conversations">
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card mt-2">
              <div className="card-header">
                <div className="input-group">
                  <input id="chatInput" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                  <span className="input-group-btn">
                    <button className="btn btn-primary btn-sm mt-1 ml-1" id="chatSend">
                      Send</button>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <ul className="chat" id="chatStream">

                </ul>
              </div>
              <div className="card-footer">
                
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
