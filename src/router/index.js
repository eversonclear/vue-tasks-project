import Vue from "vue";
import Router from 'vue-router'

import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'

Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage,
  }
]
const router = new Router({
  mode: 'history',
  routes
})

export default router
