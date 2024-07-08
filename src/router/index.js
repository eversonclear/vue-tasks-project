import Vue from "vue";
import Router from 'vue-router'

import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import HomePage from '@/pages/HomePage'

import store from "@/store";

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  }
]
const router = new Router({
  mode: 'history',
  routes,
})

router.beforeEach(async (to, from, next) => {
  const publicPages = ['/login', '/signup'];
  const authRequired = !publicPages.includes(to.path);
  
  try {
    await store.dispatch('loadActiveUser')
  } catch(error) {
    if (authRequired) {
      next('/login')
    } 
  }

  next()
})

export default router
