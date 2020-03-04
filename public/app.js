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
})

// Account Register/Login Btns
$(document).on('click', e => {
  if (e.target.id === 'signup') {
    window.location.replace('/register')
  } else if (e.target.id === 'login') {
    window.location.replace('/login')
  }
})
