import store from '../../store/index'

export default (http) => {
  http.interceptors.request.use(async config => {
    console.log(store.state.auth.token)
    config.headers.common.Authorization = `Bearer ${store.state.auth.token}`
    return config
  })

  http.interceptors.response.use(
    response => response,
    (error) => {
      const {response} = error
      if (!response) {
        return Promise.reject(error)
      }
      if ([401].indexOf(response.status) > -1) {
        return store.dispatch('auth/logIn')
      }
      console.error(response)
      return Promise.reject(error)
    }
  )
}
