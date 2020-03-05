
const createForgetPasswordToken = () => {
  axios.post('/api/forgetPasswordToken', {
    forgetPasswordEmail: $('#forgetPasswordEmail').val()
  })
    .then((response) => {
      $('#displayForgetPasswordEmail').html('A password reset link has been emailed to you.')
    })
    .catch(e => console.error(e))
}


$('#ResetEmail').on('click',
  event => {
    event.preventDefault()
    createForgetPasswordToken();
  })