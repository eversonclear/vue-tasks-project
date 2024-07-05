import Vue from 'vue'
import App from './App.vue'

import router from './router'

import apiClient from './config/apiClient'

Vue.config.productionTip = false
Vue.prototype.$apiClient = apiClient

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
