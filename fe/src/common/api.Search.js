import ApiService from "./api.service";

export const SearchService = {
    get() {
      return ApiService.get("/playlist/search", null);
    },

    query(text) {
        return ApiService.query("/playlist/search", {"text": text});
      }
};