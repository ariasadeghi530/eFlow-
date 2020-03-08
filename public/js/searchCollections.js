// $('#searchBtn').on('click', event => {
//   event.preventDefault()
//   let searchText = $('#SearchText').val()

//   if (searchText === ''){
//     searchText = 'EmptySearchStringParameter'
//   }

//   axios.get(`/searchCollections/${searchText}`)
//     .then(({ data }) => {
//       console.log(data)
//       $('#searchCollectionResult').html(data)
//     })
//     .catch(e => console.error(e))

// })