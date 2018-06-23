export default ({Vue}) => {
  const constants = {
    aad: process.env.aad,
    version: process.env.version
  }
  Vue.prototype.$constants = constants
  Vue.$constants = constants
}
