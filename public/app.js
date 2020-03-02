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

// Sidebar Btn
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
});
