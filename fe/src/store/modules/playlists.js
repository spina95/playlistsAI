const state = {
    playlist: window.localStorage.getItem('playlist'),
    query: window.localStorage.getItem('query'),
}

const getters = {
    getPlaylist: state => state.playlist,
    getQuery: state => state.query
}

const actions = {

    savePlaylist: async ({ commit }, playlist) => {
      commit('setPLaylist', playlist)
      window.localStorage.setItem('playlist', playlist)
    },
    saveQuery: async ({ commit }, query) => {
        commit('setQuery', query)
        window.localStorage.setItem('query', query)
    },
  }

const mutations = {
    setPLaylist: (state, playlist) => {
        state.playlist = playlist
    },
    setQuery: (state, query) => {
        state.query = query
    },
} 

export default {
    state,
    getters,
    actions,
    mutations
}