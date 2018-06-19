import api from '../http'

export default {
  get (userId) {
    return api.get(`users/${userId}/messages`)
  },
  findById (userId, mailId) {
    return api.get(`users/${userId}/messages/${mailId}/body/content`)
  }
}
