
const ResetPassword = (userid, password) => {

  axios.put(`/api/user/${userid}`, { password: password })

    .then(() => displayPasswordReset())
    .catch(e => console.error(e))
}

const displayPasswordReset = () => {
  $('#displayForgetPasswordReset').html('The password has been reset. ')

}

document.getElementById('ResetUserPassword').addEventListener('click',
  event => {
    event.preventDefault()
    if ($('#password').val() == $('#passwordConfirm').val()) {
      ResetPassword($('#uid').val(), $('#password').val())
    }
    else {
      $('#displayForgetPasswordReset').html('The password and confirmation password you entered in do not match. '
    }


  })