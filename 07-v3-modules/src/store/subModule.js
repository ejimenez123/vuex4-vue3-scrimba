export default {
  namespaced: true,
  state: () => ({
    count: 4      
  }),
  mutations: {
    increment (state) {
      state.count++
    } 
  },      
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  },
  actions: {
    asyncIncrement ({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }    
  }
}
