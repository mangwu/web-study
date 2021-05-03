export default {
  state: {
    name: 'moduleA'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload.name
    }
  },
  getters: {
    fullName(state) {
      return state.name + '1111'
    },
    fullName2(state, getters, rootState) {
      return getters.fullName + rootState.counter
    }
  },
  actions: {
    asyncUpdateName(context, payload) {
      return new Promise((resolve) => {
        setTimeout(()=> {
          console.log(context);
          context.commit({
            type: 'updateName',
            name: payload.name
          })
          resolve(payload.completed)
        }, 1000)
      })
      
    }
  }
}