import { setBearerToken } from "@/config/apiClient"

import { loginRequest, meRequest } from "@/requests/user"
import { SET_USER } from './mutation-types'

const makeLoginAction = async ({ dispatch }, loginData) => {
  return new Promise((resolve, reject) => {
    loginRequest(loginData.email, loginData.password).then(user => {
      dispatch('setUserAction', user)
      resolve(user)
    }).catch(error => {
      reject(error)
    })
  })
}

const loadActiveUser = ({ dispatch }) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('token')
    
    if (!token) {
      reject('Token not found')
    }
    
    setBearerToken(token)

    meRequest()
      .then(user => {
        dispatch('setUserAction', { ...user, token })
        resolve(user)
      })
      .catch((error) => {
        console.log('caiu aqui')
        dispatch('logoutAction')
        reject(error)
      })
  })
}

const setUserAction = ({ commit }, user) => {
  localStorage.setItem('token', user.token)
  setBearerToken(user.token)
  commit(SET_USER, user)
}

const logoutAction = ({ commit }) => {
  localStorage.removeItem('token')
  setBearerToken(null)
  commit(SET_USER, {})
}

export default {
  makeLoginAction,
  loadActiveUser,
  setUserAction,
  logoutAction
}