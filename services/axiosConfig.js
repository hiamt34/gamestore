import axios from 'axios'

const client = url =>
  axios.create({
    baseURL: url,
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

export default client
