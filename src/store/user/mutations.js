import { SET_USER } from './mutation-types'

export default {
  [SET_USER] (state, user) {
    console.log('entrou na mutation', state)
    state.user = user
  }
}