<template>
   <input type="text" v-model="this.input"  v-on:keyup.enter="filteredList" placeholder="Search songs..." class="text-field-style" />
   <v-row dense>
   <v-col cols="12">
    <v-row>
      <v-spacer/>
      <v-btn v-if="!loading && check_empty_response()" class="save-button icon-button" @click="dialog = true">
        <v-icon right dark> mdi-heart </v-icon>  
        Save
      </v-btn>
      <v-btn v-if="!loading && check_empty_response()" class="export-button icon-button " @click="dialog = true">
        <v-icon right dark> mdi-spotify </v-icon>  
        Create playlist
      </v-btn>
    </v-row>
    <div v-for="(track, index) in response" :key="track">
      <TrackCard :track="track" :index="index" @event="remove_track" />
    </div>
    <v-progress-circular 
        indeterminate
        color="primary"
        size="50"
        class="ma-5"
        v-if="loading"
    ></v-progress-circular>
    <h3 v-if="!loading && !check_empty_response()" color="primary">No results were found</h3>
  </v-col>
  </v-row>
  <v-dialog v-model="dialog" width="500">
    <LoginSpotifyDialog/>
  </v-dialog>
 </template>

<style>

input {
  display: block;
  width: 100%;
  height: 70px;
  margin: 20px auto;
  padding: 10px 45px;
  background: rgb(255, 255, 255) url("../assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.no-result {
  color: primary;
}

.text-field-style {
    background-color: rgba(240, 248, 255, 0.813);
    border-radius: 30px;
    color: black;
}

.icon-button {
  border-radius: 20px;
  margin: 10px 10px;
}

.save-button {
 background-color: rgba(255, 40, 40, 0.45);
}

.export-button {
 background-color: rgba(0, 188, 72, 0.45);
}


.error {
  background-color: tomato;
}
</style>

<script>
import { ref } from "vue";
import {SearchService} from "../common/api.Search"
import TrackCard from "./TrackCard.vue"
import LoginSpotifyDialog from "./LoginSpotifyDialog.vue";

export default {
  name: 'SearchBar',
  components: {
    TrackCard,
    LoginSpotifyDialog,
  },
  props: ['searchText'],
  data: function () {
    return {
        loading: false,
        input: ref(""), 
        dialog: false,
        response: {
          0: {
            "title": "The Lion Sleeps Tonight",
            "artists": "Billy Eichner, Seth Rogen",
            "text": " The Lion King (Original Motion Picture Soundtrack)\n",
            "cover": "https://i.scdn.co/image/ab67616d0000b2736eb04fff9fd19fd8f65b86e1",
            "spotify_uri": "spotify:track:67rctxgNOXUYhKiS3cv0MT",
            "preview_url": "https://p.scdn.co/mp3-preview/d9a84dfe3f4832ad78201faf9cf49b3062808e1a?cid=3568d9f9b3544af98e31131a9fcb02dd"
          },
          1: {
            "title": "Imagine The Fire",
            "artists": "Hans Zimmer, efresfsdfsdfffffffffffffffsf fdsfsdf sdf sdf dsfdsfdsfsdfsdfsdf sdasd",
            "text": " The Dark Knight (Original Motion Picture Soundtrack)\n",
            "cover": "https://i.scdn.co/image/ab67616d0000b27327d19a726d55dff73b119c78",
            "spotify_uri": "spotify:track:0umlh8c6f97cLxW6KxSHlV",
            "preview_url": "https://p.scdn.co/mp3-preview/cbf1a6789ec0a53f38652211cae543249172e8b1?cid=3568d9f9b3544af98e31131a9fcb02dd"
          },
          2: {
            "title": "The Starkiller",
            "artists": "John Williams",
            "text": " Star Wars: The Force Awakens (Original Motion Picture Soundtrack)\n",
            "cover": "https://i.scdn.co/image/ab67616d0000b273e2add5f2d1440a02e4e10a75",
            "spotify_uri": "spotify:track:7olfP2L9CUVWXfCzwJgb4Z",
            "preview_url": "https://p.scdn.co/mp3-preview/789a0b0a071c3f57acb4e9ae3e939c0c7a6fcc87?cid=3568d9f9b3544af98e31131a9fcb02dd"
          },
        }
    }
  },
  methods: {
    async filteredList() {
      this.loading = true
      this.response = {}
      const data = await SearchService.query(this.input)
      this.response = data.data.data
      this.loading = false
    },

    remove_track(index) {
      delete this.response[index]
    },

    check_empty_response() {
      return Object.keys(this.response).length > 0
    }, 
  },

  watch: { 
    async searchText() {
      this.loading = true
      this.input = this.searchText
      this.response = {}
      const data = await SearchService.query(this.searchText)
      this.response = data.data.data
      this.loading = false
    },

}
}
</script>