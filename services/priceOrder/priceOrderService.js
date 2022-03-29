import axios from 'axios'
const GHN = process.env.GHN

export default () => ({
  getAdress: async (url, params = {}) => {
    return await axios({
      method: 'get',
      url,
      params,
      headers: {
        token: GHN.token
      }
    })
  }
})
