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