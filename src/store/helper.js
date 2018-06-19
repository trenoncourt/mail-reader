import { mapState, mapActions } from 'vuex'

export const mailComputed = {
  ...mapState('mail', {
    mails: state => state.mails,
    folders: state => state.folders
  })
}

export const mailMethods = mapActions('mail', ['fetchMails', 'fetchFolders', 'fetchFolderMails'])
