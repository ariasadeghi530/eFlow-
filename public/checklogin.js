axios.get(`/api/users/checklogin`)
  .then(({data}) => {
    if (data===''){
      // NOT LOGGED IN
      if (window.location.pathname === '/login' || window.location.pathname === '/register'){

      }else{
        window.location.replace("/login")
      }
    } else if (window.location.pathname === '/login' || window.location.pathname === '/register'){
      // logged in, check if trys to login/register
      window.location.replace("/")
    }
  })
  .catch(e => console.error(e))
