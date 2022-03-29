export default context => ({
  reqService: async (uri, data = {}) => {
    return await context.app.$axios
      .post('auth' + uri, {
        data
      })
  },
  getData: async (uri, params = {}) => {
    return await context.app.$axios
      .get('auth' + uri, {
        params
      })
  }
})
