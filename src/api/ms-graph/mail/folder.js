import api from '../http'

export default {
  get (userId) {
    return api.get(`users/${userId}/mailFolders?top=999`)
  },
  getMessages (userId, folderId) {
    return api.get(`users/${userId}/mailFolders/${folderId}/messages?top=99&select=id,receivedDateTime,subject,bodyPreview,hasAttachments`)
  },
  getImMessages (userId, folderId, sender, to) {
    let query = `users/${userId}/mailFolders/${folderId}/messages?top=500&select=id,receivedDateTime,subject,bodyPreview,hasAttachments,sender,toRecipients&orderby=receivedDateTime desc&filter=receivedDateTime gt 2018-01-01`
    if (sender && to) {
      query += ` and (sender/emailaddress/address eq '${sender}' or sender/emailaddress/address eq '${to}' or sender/emailaddress/address eq '${sender.split('@')[0]}@ACCESSIT1.onmicrosoft.com' or sender/emailaddress/address eq '${to.split('@')[0]}@ACCESSIT1.onmicrosoft.com')`
    } else if (sender) {
      query += ` and (sender/emailaddress/address eq '${sender}' or sender/emailaddress/address eq '${sender.split('@')[0]}@ACCESSIT1.onmicrosoft.com')`
    }
    return api.get(query)
  }
}
