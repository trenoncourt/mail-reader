import api from '../http'

export default {
  findById (userId, mailId, attachmentId) {
    return api.get(`users/${userId}/messages/${mailId}/attachments/${attachmentId}`)
  }
}
