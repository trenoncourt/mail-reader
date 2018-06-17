import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

const api = axios.create({
  baseURL: 'https://login.microsoftonline.com/'
})

export default {
  getToken () {
    return api.post(`${Vue.$constants.aad.tenant}/oauth2/token`,
      qs.stringify({
        grant_type: 'client_credentials',
        client_id: Vue.$constants.aad.clientId,
        client_secret: Vue.$constants.aad.clientSecret,
        resource: 'https://graph.microsoft.com/'
      }))
  }
}
