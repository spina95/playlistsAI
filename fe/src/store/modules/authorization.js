import api from '@/auth/SpotifyAuthService'
import router  from '@/router/index'

const state = {
  token: window.localStorage.getItem('token'),
  user: window.localStorage.getItem('user'),
  playlist: window.localStorage.getItem('playlist'),
}

const getters = {
  isLoggedIn: state => !!state.token,
  getUser: state => state.user,
  getSpotifyToken: state => state.token
}

const actions = {
  login: () => { 
    api.login()
  },

  continueOAuth: async ({ commit }, location) => {
    //const code = location  //.href.match("/(?:code)\=([\S]*?)\&/")[1];
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code')

    const res = await api.requestToken(code)
    const token = res.data.access_token
    commit('setToken', token)
    window.localStorage.setItem('token', token)

    const user = await api.getUserInfo(token)
    commit('setUser', user.data.display_name)
    window.localStorage.setItem('user', user.data.display_name)

    router.push('/')
  },

  logout: ({ commit }) => {
    commit('setToken', null)
    commit('setUser', null)
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  },
  setUser: (state, user) => {
    state.user = user
  }
} 

export default {
  state,
  getters,
  actions,
  mutations
}