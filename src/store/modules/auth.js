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
    console.log(Vue.$http)
    Vue.$http.graph.auth.getToken()
      .then(response => {
        console.log(response.data.access_token)
        commit('SET_TOKEN', response.data.access_token)
      })
  },
  logOut ({commit}) {
    commit('SET_TOKEN', null)
  }
}
