import Vue from 'vue'

export const state = {}

export const mutations = {}

export const getters = {}

export const actions = {
  searchUsers (store, name) {
    return Vue.$http.graph.user.user.search(name)
      .then(response => {
        return response.data.value
      })
  }
}
