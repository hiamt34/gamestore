import client from '../axiosConfig'

const baseUrl = process.env.BaseAPI
export default () => ({
  getData: async (URI) => {
    return await client(baseUrl).get('/news/' + URI)
  }
})
