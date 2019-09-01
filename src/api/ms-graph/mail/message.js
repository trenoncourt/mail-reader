import api from '../http'

export default {
  get (userId) {
    return api.get(`users/${userId}/messages?top=500&select=id,receivedDateTime,subject,bodyPreview,hasAttachments`)
  },
  findById (userId, mailId) {
    return api.get(`users/${userId}/messages/${mailId}?select=body,from,toRecipients,ccRecipients,bccRecipients`)
  },
  getAttachments (userId, mailId) {
    return api.get(`users/${userId}/messages/${mailId}/attachments`)
  },
  search (userId, search) {
    return api.get(`users/${userId}/messages?top=99&select=id,receivedDateTime,subject,bodyPreview,hasAttachments&search=${search}`)
  },
  getIm (userId, senderId, receiverId) {
    return api.get(`users/${userId}/messages?top=199&filter=subject eq ''`)
  },
  getImFolder (userId) {
    return api.get(`users/${userId}/messages?select=parentFolderId&top=1&filter=subject eq ''`)
  }
}
