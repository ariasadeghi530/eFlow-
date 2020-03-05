
const createForgetPasswordToken = () => {
  axios.post('/api/ForgetPasswordToken', {
    forgetPasswordEmail: $('#forgetPasswordEmail').val()
  })
    .then((response) => {

      $('#displayForgetPasswordEmail').html('A password reset link has been emailed to you.')


    })
    .catch(e => console.error(e))
}


document.getElementById('ResetEmail').addEventListener('click',
  event => {
    event.preventDefault()
    createForgetPasswordToken();
  })