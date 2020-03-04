// User Login Authentication
const loginUser = () => {
  let u = $('#loginUsername').val()
  let p = $('#loginPassword').val()
  axios.get(`/api/users/login/${u}/${p}`)
    .then(({ data }) => {
      if (data.length<1) {
        console.log('Login failed')
      }else{
        window.location.replace("./")
      }
    })
    .catch(e => console.error(e))
}

// Register Successful
const createUser = () => {
  axios.post('/api/users', {
    username: $('#username').val(),
    email: $('#email').val(),
    password: $('#password').val(),
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    active: true,
    permissions: 0,
    join_date: moment().unix()
  })
    .then(() => {
      $('#alerts').html(`
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> Your account has been registered! Click <a href="../login">here</a> to login.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      `)
    })
    .catch(e => console.error(e))
}

// If Password doesn't match
$(document).on('click', e => {
  if (e.target.id==='register'){
    e.preventDefault()
    if ($('#password').val() === $('#password2').val()){
      createUser()
    }else{
      $('#alerts').html(`
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Fail! You suck!</strong> The passwords you entered do not match. Please try again.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      `)
    }
  }

  if (e.target.id==='login'){
    loginUser()
  }
})