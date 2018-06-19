import axios from 'axios'
import interceptors from './interceptors'

const http = axios.create({
  baseURL: 'https://graph.microsoft.com/beta/'
})

interceptors(http)
export default http
