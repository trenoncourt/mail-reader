import graph from '../api/ms-graph'

export default ({Vue}) => {
  const apis = {
    graph: graph
  }

  Vue.prototype.$http = apis
  Vue.$http = apis
}
