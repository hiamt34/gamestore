import client from '../axiosConfig'

const baseUrl = process.env.BaseAPI
export default () => ({
  getData: async (params = {}, URI) => {
    return await client(baseUrl).get('/comments/' + URI, {
      params
    })
  },
  createOrUpdateData: async (URI, data = {}, idProductOrNews = null) => {
    return await client(baseUrl)
      .post('/comments/' + URI, { data, idProductOrNews })
  }
})
