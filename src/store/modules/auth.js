import Vue from 'vue'

export const state = {
  token: null
}

export const mutations = {
  SET_TOKEN (state, newValue) {
    state.token = newValue
  }
}

export const getters = {}

export const actions = {
  logIn ({commit}) {
    return Vue.$http.graph.auth.getToken()
      .then(response => {
        commit('SET_TOKEN', response.data.access_token)
      })
  },
  logOut ({commit}) {
    commit('SET_TOKEN', null)
  }
}
