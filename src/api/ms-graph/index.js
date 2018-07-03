import http from './http'
import mail from './mail'
import auth from './auth'
import user from './user'

export default {
  ...http,
  mail,
  auth,
  user
}
