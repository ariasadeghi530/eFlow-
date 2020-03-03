Retrieve info of signed in user
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


// SEARCH BAR TOGGLE DISPLAY
$('#search').click( function (event) {
  event.preventDefault()

  //open search bar
  if (!$('#searchForm').val()) {
    $('#search').toggle()
    $('#close').toggle()
    $('#searchForm').toggle()
    $('.uk-logo').toggle()
    $('.uk-form-icon').toggle()
  }
})

$('#close').click( function (event) {
  event.preventDefault()

  $('#close').toggle()
  $('#search').toggle()
  $('#searchForm').toggle()
  $('.uk-logo').toggle()
  $('.uk-form-icon').toggle()

})