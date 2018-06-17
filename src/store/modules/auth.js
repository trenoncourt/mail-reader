import authService from '../../services/authService'

export const state = {
  token: null,
  me: null
}

export const mutations = {
  SET_TOKEN (state, newValue) {
    state.token = newValue
  },
  SET_CURRENT_USER (state, newValue) {
    state.me = newValue
  }
}

export const getters = {
}

export const actions = {
  logIn ({commit}) {
    authService.initialize().then(() => {
      authService.acquireToken().then(token => {
        commit('SET_TOKEN', token)
        commit('SET_ME', authService.getUserProfile())
      })
    })
  },
  logOut ({commit}) {
    commit('SET_TOKEN', null)
    commit('SET_ME', null)
  }
}
