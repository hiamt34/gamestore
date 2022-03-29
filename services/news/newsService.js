import client from '../axiosConfig'

const baseUrl = process.env.BaseAPI
export default () => ({
  getData: async (params, URI) => {
    return await client(baseUrl).get('/news/' + URI, {
      params
    })
  }
})
