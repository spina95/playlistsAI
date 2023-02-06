import spotifyAPI from '@/auth/SpotifyAuthService'
import router  from '@/router/index'

const state = {
  spotifyToken: window.localStorage.getItem('spotify-token'),
  spotifyUser: window.localStorage.getItem('spotify-user'),
  playlist: window.localStorage.getItem('playlist'),
}

const getters = {
  isSpotifyLoggedIn: state => !!state.spotifyToken,
  getSpotifyUser: state => state.spotifyUser,
  getSpotifyToken: state => state.spotifyToken
}

const actions = {
  spotifyLogin: () => { 
    spotifyAPI.login()
  },

  continueOAuth: async ({ commit }, location) => {
    //const code = location  //.href.match("/(?:code)\=([\S]*?)\&/")[1];
    const queryString = location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code')

    const res = await spotifyAPI.requestToken(code)
    const token = res.data.access_token
    commit('setSpotifyToken', token)
    window.localStorage.setItem('spotifyToken', token)

    const user = await spotifyAPI.getUserInfo(token)
    commit('setSpotifyUser', user.data.display_name)
    window.localStorage.setItem('spotifyUser', user.data.display_name)

    router.push('/')
  },

  spotifyLogout: ({ commit }) => {
    commit('setSpotifyToken', null)
    commit('setSpotifyUser', null)
    window.localStorage.removeItem('spotifyToken')
    window.localStorage.removeItem('spotifyUser')
  }
}

const mutations = {
  setSpotifyToken: (state, token) => {
    state.spotifyToken = token
  },
  setSpotifyUser: (state, user) => {
    state.spotifyUser = user
  }
} 

export default {
  state,
  getters,
  actions,
  mutations
}