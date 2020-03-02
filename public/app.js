function checkLogin () {
  axios.get(`/api/users/session`)
    .then(res => {
      console.log(res)
    })
    .catch(e => console.error(e))
}
checkLogin()

$('#logout').on('click', () => {
  axios.get(`/api/users/logout`)
    .then(res => {
      window.location.replace("./login")
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


// SEARCH BAR TOGGLE DISPLAY
$('#search').click( function (event) {
  event.preventDefault()
  if (!$('#searchForm').val()) {

    $('#searchForm').toggle()

    $('.uk-logo').toggle()
  }
})