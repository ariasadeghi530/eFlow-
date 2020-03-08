
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

      $('#profile-edit-username').val(data.username)
      $('#profile-name-first').val(data.first_name)
      $('#profile-name-last').val(data.last_name)
      $('#profile-edit-email').val(data.email)
    })
    .catch(e => console.error(e))

    // listener for submit profile edits page
  $(document).on('click', event => {
    if(event.target.id === 'submit-profile-edit') {
      axios.put(`/api/users/${UserInfo.id}`, {
        username: $('#profile-edit-username').val(),
        first_name: $('#profile-name-first').val(),
        last_name: $('#profile-name-last').val(),
        email: $('#profile-edit-email').val()
      })
      .then(() => {
        console.log('User Updated')
        console.log(UserInfo)
        window.location.replace('/profile')
      })
    }
  })


// Account Logout
$('#logout').on('click', () => {
  axios.get(`/api/users/logout`)
    .then(() => {
      location.replace('./login')
    })
    .catch(e => console.error(e))
})

// Product Page
function calumSucksDick(id) {
  axios.get(`/api/items/${id}`)
    .then(({data}) => {
      $('#product-title').text(name)
      $('#product-description').text(description)
      $('#product-price').text('$'+price)
      $('#product-img').attr('src', './images/favicon.ico')
    })
    .catch(e => console.error(e))
}

$(document).on('click', event => {
  if(event.target.classList.contains('product-collection')) {
    calumSucksDick(event.target.value)
  }
})

// Edit Profile
$(document).on('click', event => {
  if(event.target.id === 'edit-btn') {
    window.location.replace('/profile-edit')
  }
})