let myUserId
let currentMsgCount

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}

function getUrlParam(parameter, defaultvalue) {
  var urlparameter = defaultvalue;
  if (window.location.href.indexOf(parameter) > -1) {
    urlparameter = getUrlVars()[parameter];
  }
  return urlparameter;
}

let currentChatToken = getUrlParam('token', 'None')

axios.get('/api/users/checklogin')
  .then(({ data }) => {
    myUserId = data.userId
  })
  .catch(e => console.error(e))

axios.get('/api/chat/getconvos')
  .then(({data}) => {
    let convoList = data
    convoList.forEach(convo => {
      let recipientInfo
      if (convo.user1===myUserId){
        // GET SELLER
        axios.get(`/api/users/getbyid/${convo.user2}`)
          .then(({ data }) => {
            recipientInfo = data
          })
          .then(() => {
            let convoElem = `
              <li class="list-group-item"><a href="./chat?token=${convo.chatToken}">${recipientInfo.first_name} ${recipientInfo.last_name} - (${recipientInfo.username})</a></li>
            `
            $('#conversations').append(convoElem)
          })
          .catch(e => console.error(e))
      }else{
        // GET BUYER
        axios.get(`/api/users/getbyid/${convo.user1}`)
          .then(({ data }) => {
            recipientInfo = data
            console.log(recipientInfo)
          })
          .then(() => {
            let convoElem = `
              <li class="list-group-item"><a href="./chat?token=${convo.chatToken}">${recipientInfo.first_name} ${recipientInfo.last_name} - (${recipientInfo.username})</a></li>
            `
            $('#conversations').append(convoElem)
          })
          .catch(e => console.error(e))
      }
    })
  })
  .catch(e => console.error(e))

  function LoadChat(token){
    $('#chatStream').html('')
    axios.get(`/api/chat/messages/${token}`)
      .then(({ data }) => {
        currentMsgCount = data.length
        data.forEach(msg => {
          axios.get(`/api/users/getbyid/${msg.sender}`)
            .then(({ data }) => {
              let senderUsername = data.username
              let msgElem = `
                  <li className="left clearfix">
                    <div className="chat-body clearfix">
                      <div className="header">
                        <strong className="primary-font">${senderUsername}</strong> <small className="pull-right text-muted">
                          <span className="glyphicon glyphicon-time"></span>${msg.createdAt}</small>
                      </div>
                      <p>
                        ${msg.text}
                      </p>
                    </div>
                  </li>
              `
              $('#chatStream').prepend(msgElem)
            })
            .catch(e => console.error(e))
        })
      })

      .catch(e => console.error(e))
  }

  if (currentChatToken==='None'){
    console.log(`No chat`)
  }else{
    LoadChat(currentChatToken)
    setInterval(() => {
      axios.get(`/api/chat/messages/${currentChatToken}`)
        .then(({ data }) => {
          if (currentMsgCount<data.length){
            LoadChat(currentChatToken)
          }
        })

        .catch(e => console.error(e))
    }, 3000)
  }

  $('#chatSend').on('click', ()=> {
    let msg = $('#chatInput').val()
    axios.get(`/api/chat/new/${currentChatToken}/${msg}`)
      .then(() => {
      $('#chatInput').val('')
      })
      .catch(e => console.error(e))
  })