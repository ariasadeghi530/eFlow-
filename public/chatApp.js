let myUserId

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
      if (convo.buyerId===myUserId){
        // GET SELLER
        axios.get(`/api/users/getbyid/${convo.sellerId}`)
          .then(({ data }) => {
            recipientInfo = data
          })
          .then(() => {
            let convoElem = `
              <li class="list-group-item"><a href="#">${recipientInfo.username} - (${convo.chatToken})</a></li>
            `
            $('#conversations').append(convoElem)
          })
          .catch(e => console.error(e))
      }else{
        // GET BUYER
        axios.get(`/api/users/getbyid/${convo.buyerId}`)
          .then(({ data }) => {
            recipientInfo = data
            console.log(recipientInfo)
          })
          .then(() => {
            let convoElem = `
            <li className="list-group-item d-flex justify-content-between align-items-center">
              ${recipientInfo.username} (${convo.chatToken})
            </li>
            `
            $('#conversations').append(convoElem)
          })
          .catch(e => console.error(e))
      }
    })
  })
  .catch(e => console.error(e))