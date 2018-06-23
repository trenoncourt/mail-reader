import api from '../http'

export default {
  get (userId) {
    return api.get(`users/${userId}/mailFolders?top=99`)
  },
  getMessages (userId, folderId) {
    return api.get(`users/${userId}/mailFolders/${folderId}/messages?top=99&select=id,receivedDateTime,subject,bodyPreview`)
  }
}
