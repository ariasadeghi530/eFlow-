$('#searchBtn').on('click', event => {
  event.preventDefault()
  let searchText = $('#SearchText').val()
  let searchCategoryOption = $('#search-item-category').val()
  console.log(searchText, searchCategoryOption)
  axios.get(`/searchCollections/${searchCategoryOption}/${searchText}`)
    .then(({ data }) => {

    })
    .catch(e => console.error(e))

})