import api from '../http'

export default {
  search (start) {
    return api.get(`users?select=userPrincipalName&filter=startswith(userPrincipalName,'${start}')&top=5`)
  }
}
