import { mapState, mapActions, mapGetters } from 'vuex'

export const mailComputed = {
  ...mapState('mail', {
    mails: state => state.mails,
    folders: state => state.folders,
    currentUser: state => state.currentUser,
    currentMail: state => state.currentMail,
    currentMailId: state => state.currentMailId,
    currentMailAttachments: state => state.currentMailAttachments
  }),
  ...mapGetters('mail', ['from', 'to', 'cc', 'bcc'])
}

export const mailMethods = mapActions('mail', ['fetchMails', 'fetchFolders', 'fetchFolderMails', 'fetchMail', 'resetMailBody', 'fetchMailAttachments', 'fetchMailAttachmentContent', 'downloadAttachment', 'updateCurrentUser', 'searchMails'])
export const userMethods = mapActions('user', ['searchUsers'])
