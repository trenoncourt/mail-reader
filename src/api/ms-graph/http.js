import axios from 'axios'

const http = axios.create({
  baseURL: 'https://graph.microsoft.com/beta/'
})

export default http
