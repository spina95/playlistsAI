import { createStore } from 'vuex'
import spotifyAuthorization from './modules/spotifyAuthorization'
import playlists from './modules/playlists'
import authorization from './modules/authorization'

export const store = createStore({
    modules: {
        spotifyAuthorization,
        playlists,
        authorization
      }
  })