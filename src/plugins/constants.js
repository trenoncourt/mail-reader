export default ({Vue}) => {
  const constants = {
    aad: process.env.aad
  }
  Vue.prototype.$constants = constants
  Vue.$constants = constants
}
