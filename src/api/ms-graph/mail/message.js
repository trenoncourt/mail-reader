import api from '../http'

export default {
  get (userId) {
    return api.get(`users/${userId}/messages`)
  }
}
