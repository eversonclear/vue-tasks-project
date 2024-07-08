import Vuex from 'vuex'
import Vue from 'vue'

import userStore from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ...userStore.state,
  },
  mutations: {
    ...userStore.mutations,
  },
  actions: {
    ...userStore.actions,
  },
})

export default store