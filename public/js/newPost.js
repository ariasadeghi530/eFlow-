
$('#postItem').click(event => {
  event.preventDefault()
  axios.post('/api/items',
  {

  })
  .then(()=>{
    window.location.replace('/profile')
  })
  .catch(e => console.log(e))
})