import router  from '@/router/index';
import JwtService from '@/common/jwt.service';
import { SearchService } from '@/common/api.Search';
import ApiService from '@/common/api.service';
import googleAPI from '@/auth/googleAuthService'

const state = {
  authToken: window.localStorage.getItem('authToken'),
  authUser: window.localStorage.getItem('authUser'),
}

const getters = {
  isAuthLoggedIn: state => !!state.authToken,
  getAuthUser: state => state.authUser,
  getAuthToken: state => state.authToken,
}

const actions = {

  googleLogin: () => { 
    googleAPI.login()
  },

  continueAuth: async ({ commit }, token) => {
    commit('setAuthToken', token)
    window.localStorage.setItem('authToken', token);
    JwtService.saveToken(token)
    ApiService.setHeader(token)

    const user = await SearchService.getUserInfo()
    commit('setAuthUser', user.data.username)
    window.localStorage.setItem('authUser', user.data.username)

    router.push('/');
  },

  authLogout: async ({ commit }) => {
    await SearchService.logout()
    commit('setAuthToken', null)
    commit('setAuthUser', null)
    window.localStorage.removeItem('authToken')
    ApiService.setHeader(null)

  }
}

const mutations = {
  setAuthToken: (state, token) => {
    state.authToken = token
  },
  setAuthUser: (state, user) => {
    state.authUser = user
  }
} 

export default {
  state,
  getters,
  actions,
  mutations
}