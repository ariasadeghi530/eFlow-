// Retrieve info of signed in user
let UserInfo
  axios.get(`/api/users/getinfo`)
    .then(({data}) => {
      UserInfo = data
      $('#welcome').text(`Welcome, ${UserInfo.username}`)
    })
    .catch(e => console.error(e))

$('#logout').on('click', () => {
  axios.get(`/api/users/logout`)
    .then(() => {
      location.reload()
    })
    .catch(e => console.error(e))
})0