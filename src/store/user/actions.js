import { setBearerToken } from "@/config/apiClient";
import { loginRequest, meRequest, signUpRequest } from "@/requests/user";

import { SET_USER } from './mutation-types';

const TOKEN_KEY = 'token';

const getToken = () => localStorage.getItem(TOKEN_KEY);
const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
const removeToken = () => localStorage.removeItem(TOKEN_KEY);

const makeLoginAction = async ({ dispatch }, loginData) => {
  try {
    const user = await loginRequest(loginData.email, loginData.password);
    dispatch('setUserAction', user);
    return user;
  } catch (error) {
    throw new Error(error.response.data.message || 'Login failed');
  }
};

const makeSignupAction = async ({ dispatch }, signUpData) => {
  try {
    const user = await signUpRequest(signUpData.email, signUpData.password);
    dispatch('setUserAction', user);
    return user;
  } catch (error) {
    throw new Error(error.response.data.message || 'Sign up failed');
  }
}

const loadActiveUser = async ({ dispatch }) => {
  const token = getToken();
  if (!token) throw new Error('Token not found');

  setBearerToken(token);

  try {
    const user = await meRequest();
    dispatch('setUserAction', { ...user, token });
    return user;
  } catch (error) {
    dispatch('logoutAction');
    throw new Error('Failed to load active user');
  }
};

const setUserAction = ({ commit }, user) => {
  setToken(user.token);
  setBearerToken(user.token);
  commit(SET_USER, user);
};

const logoutAction = ({ commit }) => {
  removeToken();
  setBearerToken(null);
  commit(SET_USER, {});
};

export default {
  makeLoginAction,
  makeSignupAction,
  loadActiveUser,
  setUserAction,
  logoutAction
};
