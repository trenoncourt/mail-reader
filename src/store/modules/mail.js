import Vue from 'vue'
import fileService from '../../services/fileService'

export const state = {
  mails: [],
  folders: [],
  currentUser: '',
  currentMail: '',
  currentMailAttachments: [],
  currentMailId: null
}

export const getters = {
  from (state) {
    if (!state.currentMail || !state.currentMail.from) {
      return ''
    }
    return `${state.currentMail.from.emailAddress.name} - ${state.currentMail.from.emailAddress.address}`
  },
  to (state) {
    if (!state.currentMail || !state.currentMail.toRecipients) {
      return ''
    }
    return state.currentMail.toRecipients.map(r => r.emailAddress.name).join(', ')
  },
  cc (state) {
    if (!state.currentMail || !state.currentMail.ccRecipients) {
      return ''
    }
    return state.currentMail.ccRecipients.map(r => r.emailAddress.name).join(', ')
  },
  bcc (state) {
    if (!state.currentMail || !state.currentMail.bccRecipients) {
      return ''
    }
    return state.currentMail.bccRecipients.map(r => r.emailAddress.name).join(', ')
  }
}

export const mutations = {
  SET_MAILS (state, newValue) {
    state.mails = newValue
  },
  SET_FOLDERS (state, newValue) {
    state.folders = newValue
  },
  SET_CURRENT_MAIL (state, newValue) {
    state.currentMail = newValue
  },
  SET_CURRENT_MAIL_ID (state, newValue) {
    state.currentMailId = newValue
  },
  SET_CURRENT_MAIL_ATTACHMENTS (state, newValue) {
    state.currentMailAttachments = newValue
  },
  SET_CURRENT_USER (state, newValue) {
    state.currentUser = newValue
  }
}

export const actions = {
  fetchMails ({commit, state}) {
    return Vue.$http.graph.mail.message.get(state.currentUser)
      .then(response => {
        const mails = response.data.value.map(m => {
          return {
            id: m.id,
            subject: m.subject,
            bodyPreview: m.bodyPreview,
            receivedDate: m.receivedDateTime,
            hasAttachments: m.hasAttachments
          }
        })
        commit('SET_MAILS', mails)
        return mails
      })
  },
  fetchFolders ({commit, state}) {
    return Vue.$http.graph.mail.folder.get(state.currentUser)
      .then(response => {
        const folders = response.data.value
        commit('SET_FOLDERS', folders)
        return folders
      })
  },
  fetchFolderMails ({commit, state}, folderId) {
    return Vue.$http.graph.mail.folder.getMessages(state.currentUser, folderId)
      .then(response => {
        const mails = response.data.value.map(m => {
          return {
            id: m.id,
            subject: m.subject,
            bodyPreview: m.bodyPreview,
            receivedDate: m.receivedDateTime,
            hasAttachments: m.hasAttachments
          }
        })
        commit('SET_MAILS', mails)
        return mails
      })
  },
  fetchMail ({commit, state}, mailId) {
    commit('SET_CURRENT_MAIL_ID', mailId)
    return Vue.$http.graph.mail.message.findById(state.currentUser, mailId)
      .then(response => {
        commit('SET_CURRENT_MAIL', response.data)
        return response.data.value
      })
  },
  fetchMailAttachments ({commit, state}, mailId) {
    return Vue.$http.graph.mail.message.getAttachments(state.currentUser, mailId)
      .then(response => {
        commit('SET_CURRENT_MAIL_ATTACHMENTS', response.data.value)
        return response.data.value
      })
  },
  fetchMailAttachmentContent ({state}, {mailId, attachmentId}) {
    return Vue.$http.graph.mail.attachment.findById(state.currentUser, mailId, attachmentId)
      .then(response => {
        return response.data.contentBytes
      })
  },
  resetMailBody ({commit}) {
    commit('SET_CURRENT_MAIL', null)
  },
  downloadAttachment ({dispatch, state}, ma) {
    return dispatch('fetchMailAttachmentContent', {mailId: state.currentMailId, attachmentId: ma.id})
      .then(content => {
        fileService.saveFileFromB64(ma.name, content, ma.contentType)
      })
  },
  updateCurrentUser ({commit, dispatch}, user) {
    commit('SET_CURRENT_USER', user)
    commit('SET_CURRENT_MAIL', '')
    commit('SET_MAILS', [])
    dispatch('fetchFolders')
  },
  searchMails ({commit, state}, search) {
    return Vue.$http.graph.mail.message.search(state.currentUser, search)
      .then(response => {
        const mails = response.data.value.map(m => {
          return {
            id: m.id,
            subject: m.subject,
            bodyPreview: m.bodyPreview,
            receivedDate: m.receivedDateTime,
            hasAttachments: m.hasAttachments
          }
        })
        commit('SET_MAILS', mails)
        return mails
      })
  }
}
