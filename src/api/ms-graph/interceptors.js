import store from 'src/store/index'
import {UPDATE_TOKEN} from '../../store/types'

export default (http) => {
  // https://github.com/mzabriskie/axios#interceptors
  http.interceptors.request.use(async config => {
    config.headers.common.Authorization = `Bearer ${store.state.appToken}`
    return config
  })

  http.interceptors.response.use(
    response => response,
    (error) => {
      const {response} = error
      if (!response) {
        return Promise.reject(error)
      }
      if ([403].indexOf(response.status) > -1) {
        return store.dispatch(UPDATE_TOKEN)
      }
      console.error(response)
      return Promise.reject(error)
    }
  )
}
