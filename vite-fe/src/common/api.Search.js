import ApiService from "./api.service";

export const SearchService = {
    login(email, password) {
      return ApiService.post("/dj-rest-auth/login/", {"email": email, "password": password});
    },

    loginGoogle(code, state) {
      return ApiService.post("/auth/api/auth/social/google/login/", {"code": code, "state": state});
    },

    logout() {
      return ApiService.post("/dj-rest-auth/logout/");
    },

    getUserInfo() {
      return ApiService.get("/dj-rest-auth/user");
    },

    getGoogleLogin() {
      return ApiService.post("/auth/api/auth/social/google/auth-server/");
    },

    get() {
      return ApiService.get("/playlist/search", null);
    },

    query(text) {
        return ApiService.query("/playlist/search", {"text": text});
    },

    savePlaylist(data) {
      return ApiService.post("/playlist/playlists/", data);
    },

    getUserPlaylist(user) {
      return ApiService.get('/playlist/playlists?user=' + user);
    },

    getUserPlaylistByUUID(uuid) {
      return ApiService.get('/playlist/playlists?uuid=' + uuid);
    },

    deleteUserPlaylist(id) {
      return ApiService.delete('/playlist/playlists/' + id);
    },
};
