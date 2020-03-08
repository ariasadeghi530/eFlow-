$('#searchBtn').on('click', event => {
  event.preventDefault()
  let searchText = $('#SearchText').val()
  let searchCategoryOption = $('#search-item-category').val()
  console.log(searchText, searchCategoryOption)

  if (searchText === ''){
    searchText = 'EmptySearchStringParameter'
  }

  axios.get(`/searchCollections/${searchCategoryOption}/${searchText}`)
    .then(({ data }) => {
      console.log(data)
      $('#searchCollectionResult').html(data)
    })
    .catch(e => console.error(e))

})