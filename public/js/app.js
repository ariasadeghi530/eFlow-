
// Open navbar search
$('#search').click(function (event) {
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

// Close navbar search
$('#close').click(function (event) {
  event.preventDefault()
  if($('#searchForm').val()){
    $('#searchForm').val('')
  }
  
  $('#close').toggle()
  $('#search').toggle()
  $('#searchForm').toggle()
  $('.uk-logo').toggle()
  $('.uk-form-icon').toggle()

})

$(document).on('keypress', function (e) {
  if (e.which == 13) {
    if($('#searchForm').val()){
      console.log($('#searchForm').val())
      location.replace('./products')
      $('#searchForm').val('')
    }
  }
});



// Retrieve info of signed in user
let UserInfo
  axios.get(`/api/users/getinfo`)
    .then(({data}) => {
      UserInfo = data
      console.log(data)
      $('#side-username').text(data.username)
      $('#profile-username').text(data.username)
      $('#profile-name').text(`${data.first_name} ${data.last_name}`)
      $('#profile-email').text(data.email)

    })
    .catch(e => console.error(e))



// Account Logout
$('#logout').on('click', () => {
  axios.get(`/api/users/logout`)
    .then(() => {
      location.replace('./login')
    })
    .catch(e => console.error(e))
})
