import client from '../axiosConfig'

const baseUrl = process.env.BaseAPI
export default () => ({
  getData: async (URI, params = {}) => {
    return await client(baseUrl).get('/orders/' + URI, { params })
  },
  createData: async (URI, data = {}) => {
    return await client(baseUrl)
      .post('/orders/' + URI, {
        data
      })
  }
})
