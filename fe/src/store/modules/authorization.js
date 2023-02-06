import router  from '@/router/index';
import JwtService from '@/common/jwt.service';
import { SearchService } from '@/common/api.Search';
import ApiService from '@/common/api.service';
import googleAPI from '@/auth/googleAuthService'

const state = {
  authToken: window.localStorage.getItem('authToken'),
  authUser: window.localStorage.getItem('authUser'),
  authUserId: window.localStorage.getItem('authUserId'),
}

const getters = {
  isAuthLoggedIn: state => !!state.authToken,
  getAuthUser: state => state.authUser,
  getAuthUserId: state => state.authUserId,
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

    commit('setAuthUserId', user.data.pk)
    window.localStorage.setItem('authUserId', user.data.pk)


    router.push('/');
  },

  continueGoogleOAuth: async ({ commit }, location) => {
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code')
    const state = urlParams.get('state')

    const res = await SearchService.loginGoogle(code, state)
    const token = res.data.access_token
    commit('setSpotifyToken', token)
    window.localStorage.setItem('spotifyToken', token)

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
    commit('setAuthUserId', null)
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('authUser')
    window.localStorage.removeItem('authUserId')
    ApiService.setHeader(null)

  }
}

const mutations = {
  setAuthToken: (state, token) => {
    state.authToken = token
  },
  setAuthUser: (state, user) => {
    state.authUser = user
  },
  setAuthUserId: (state, id) => {
    state.authUserId = id
  },
} 

export default {
  state,
  getters,
  actions,
  mutations
}