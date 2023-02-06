import ApiService from "./api.service";

export const SpotifyService = {
    get() {
      return ApiService.get("/playlist/search", null);
    },

    createPlaylist(title, description, tracks) {
      const token = window.localStorage.getItem('spotifyToken')
      if (!token) { return }

      const data = {
        token: token,
        title: title,
        description: description,
        tracks: tracks
      }
      return ApiService.post("/spotify/playlist", data);
    },

    getSpotifyTracks(ids) {
      return ApiService.post('/spotify/search-tracks', ids);
    },
};