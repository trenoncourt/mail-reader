import authService from '../../../services/authService'

export const signIn = (store) => {
  authService.initialize().then(() => {
    authService.acquireToken().then(token => {
      store.commit('SET_TOKEN', token)
      store.commit('SET_ME', authService.getUserProfile())
    })
  })
}

