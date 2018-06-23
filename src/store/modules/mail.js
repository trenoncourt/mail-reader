import Vue from 'vue'

export const state = {
  mails: [],
  folders: [],
  currentEmail: 'cbergem@access-it.fr',
  currentMailBody: '',
  currentMailId: null
}

export const getters = {}

export const mutations = {
  SET_MAILS (state, newValue) {
    state.mails = newValue
  },
  SET_FOLDERS (state, newValue) {
    state.folders = newValue
  },
  SET_CURRENT_MAIL_BODY (state, newValue) {
    state.currentMailBody = newValue
  },
  SET_CURRENT_MAIL_ID (state, newValue) {
    state.currentMailId = newValue
  }
}

export const actions = {
  fetchMails ({commit}) {
    return Vue.$http.graph.mail.message.get(state.currentEmail)
      .then(response => {
        const mails = response.data.value.map(m => {
          return {
            id: m.id,
            subject: m.subject,
            bodyPreview: m.bodyPreview,
            receivedDate: m.receivedDateTime
          }
        })
        commit('SET_MAILS', mails)
        return mails
      })
  },
  fetchFolders ({commit, state}) {
    return Vue.$http.graph.mail.folder.get(state.currentEmail)
      .then(response => {
        const folders = response.data.value
        commit('SET_FOLDERS', folders)
        return folders
      })
  },
  fetchFolderMails ({commit}, folderId) {
    return Vue.$http.graph.mail.folder.getMessages(state.currentEmail, folderId)
      .then(response => {
        const mails = response.data.value.map(m => {
          return {
            id: m.id,
            subject: m.subject,
            bodyPreview: m.bodyPreview,
            receivedDate: m.receivedDateTime
          }
        })
        commit('SET_MAILS', mails)
        return mails
      })
  },
  fetchMailBody ({commit}, mailId) {
    commit('SET_CURRENT_MAIL_ID', mailId)
    return Vue.$http.graph.mail.message.findById(state.currentEmail, mailId)
      .then(response => {
        commit('SET_CURRENT_MAIL_BODY', response.data.value)
        return response.data.value
      })
  }
}
