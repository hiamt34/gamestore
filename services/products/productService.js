
export default context => ({
  getData: async (params = {}, URI) => {
    return await context.app.$axios.get('/products/' + URI, {
      params
    })
  }
})
