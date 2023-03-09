<template>
   <input type="text" v-model="this.input"  v-on:keyup.enter="filteredList" placeholder="Search" class="text-field-style search-text-field" />
   <v-row dense>
   <v-col cols="12">
    <v-row>
      <v-spacer/>
      
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
    <h3 class="pa-8" v-if="!loading && !check_empty_response() && searchText" color="primary">No results were found</h3>
  </v-col>
  </v-row>
  <v-dialog v-model="dialog" width="500">
    <LoginSpotifyDialog/>
  </v-dialog>
 </template>

<style>

.search-text-field {
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
import { mapActions } from 'vuex'

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
        response: [
          
        ]
    }
  },
  methods: {
    async filteredList() {
      console.log(this.input)
      this.$router.replace({ name: "home", query: {search: this.input}})
    },

    remove_track(index) {
      delete this.response[index]
    },

    check_empty_response() {
      return Object.keys(this.response).length > 0
    }, 

    clickSavePlaylist() {
      this.savePlaylist(this.response)
      this.saveQuery(this.input)
      this.$router.push({ name: 'save-playlist' })
    },

    clickCreateSpotifyPlaylist() {
      this.savePlaylist(this.response)
      this.$router.push({ name: 'create-spotify-playlist' })
    },

    async load() {
      const query = this.$route.query.search;
      this.input = query;
      console.log(query)
      if (query != null && query.length != 0) {
        this.loading = true;
        this.input = query;
        this.response = {}
        const data = await SearchService.query(this.input)
        this.response = data.data.data
        this.loading = false
      }
    },

    ...mapActions(['savePlaylist', 'saveQuery']),
  },

  watch: { 

    async '$route'() {
      this.response = {}
      this.load()
    },
    
    async searchText() {
      this.$router.replace({ name: "home", query: {query: this.searchTextd} })
    },
  },


  mounted () {
    this.load()
  },
}
</script>