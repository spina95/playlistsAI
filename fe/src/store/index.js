import { createStore } from 'vuex'
import authorization from './modules/authorization'
import playlists from './modules/playlists'

export const store = createStore({
    modules: {
        authorization,
        playlists
      }
  })