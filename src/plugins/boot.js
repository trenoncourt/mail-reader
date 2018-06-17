export default ({app, store, Vue}) => {
  store.dispatch('auth/logIn').then(() => {
    /* eslint-disable-next-line no-new */
    new Vue(app)
  })
}
