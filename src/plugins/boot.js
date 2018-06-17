export default ({app, store, Vue}) => {
  store.dispatch('auth/signIn').then(() => {
    /* eslint-disable-next-line no-new */
    new Vue(app)
  })
}
