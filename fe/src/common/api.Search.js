import ApiService from "./api.service";

export const SearchService = {
    login(email, password) {
      return ApiService.post("/auth/auth/login/", {"email": email, "password": password});
    },

    logout() {
      return ApiService.post("/auth/auth/logout/");
    },

    getUserInfo() {
      return ApiService.get("/auth/auth/user");
    },

    getGoogleLogin() {
      return ApiService.post("/auth/api/auth/social/google/auth-server/");
    },

    get() {
      return ApiService.get("/playlist/search", null);
    },

    query(text) {
        return ApiService.query("/playlist/search", {"text": text});
    }
};