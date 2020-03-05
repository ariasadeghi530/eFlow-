
const ResetPassword = (userid, password, token) => {

  axios.put(`/forgetPasswordReset/${userid}/${token}`, { password: password })

    .then(() => displayPasswordReset())
    .catch(e => console.error(e))
}

const displayPasswordReset = () => {
  $('#displayForgetPasswordReset').html('The password has been reset.')

}
console.log($('#uid').val(), $('#password').val(), $('#tid').val())

$('#ResetUserPassword').on('click',
  event => {
    event.preventDefault()
    if ($('#password').val() == $('#passwordConfirm').val()) {
      
      ResetPassword($('#uid').val(), $('#password').val(), $('#tid').val())
    }
    else {
      $('#displayForgetPasswordReset').html('The password and confirmation password you entered in do not match.')
    }
  })