import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    messages: []
  },
  mutations: {
    increament (state) {
      state.count++
    },
    divide (state) {
      state.count--
    },
    postMsg (state, msg) {
      state.messages.push(msg)
    }
  },
  actions: {
    increament (context) {
      context.commit('increament')
    },
    divide ({commit}) {
      commit('divide')
    },
    postMsg ({commit}, msg) {
      commit('postMsg', msg)
    }
  }
})
