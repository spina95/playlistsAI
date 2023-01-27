const state = {
    playlist: window.localStorage.getItem('playlist'),
}

const getters = {
    getPlaylist: state => state.playlist
}

const actions = {

    savePlaylist: async ({ commit }, playlist) => {
      commit('setPLaylist', playlist)
      window.localStorage.setItem('playlist', playlist)
    },

  }

const mutations = {
    setPLaylist: (state, playlist) => {
        state.playlist = playlist
    },
} 

export default {
    state,
    getters,
    actions,
    mutations
}