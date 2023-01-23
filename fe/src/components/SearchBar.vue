<template>
   <input type="text" v-model="this.input" v-on:keyup.enter="filteredList" placeholder="Search songs..." class="text-field-style" />
   <div v-for="track in response" :key="track">
    <v-row class="item track"  align="center">
      <img class="cover" :src="track['cover']"/>
      <v-col align-self="start">
        <v-row align="center" style="height: 50px">
          <v-spacer/>
          <v-icon size="30" style="color:darkgrey">mdi-trash-can-outline</v-icon> 
        </v-row>
        <h2 style="height: 50%" class="track-title">{{ track["title"] }}</h2>
        <h3 style="height: 50%" class="track-subtitle">{{ track["artists"] }}</h3>
        <v-row align-content="end" align="end" style="height: 90px">
          <audio controls>
            <source :src="track['preview_url']" type="audio/mpeg">
            Your browser does not support the audio tag.
            </audio>
          <v-spacer/>
        </v-row>
        
      </v-col>
    </v-row>
   </div>
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

.text-field-style {
    background-color: rgba(240, 248, 255, 0.813);
    border-radius: 30px;
    color: black;
}

.item {
  width: 100%;
  height: 190px;
  margin: 0 auto 10px auto;
  padding: 0px 15px;
  color: white;
  vertical-align: middle;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.track {
  background-color: rgba(92, 92, 92, 0.379);
  cursor: pointer;
}

.cover {
  height: 150px;
  width: 150px;
  border-radius: 10%;
}

.track-title {
  color: white;
  font-size: large;
  text-align: start;
}

.track-subtitle {
  color: rgb(138, 138, 138);
  font-size: large;
  text-align: start;
}


.error {
  background-color: tomato;
}
</style>

<script>
import { ref } from "vue";
import {SearchService} from "../common/api.Search"

export default {
  name: 'SearchBar',
  components: {
  },
  data: function () {
    return {
        input: ref(""), 
        fruits: ["apple", "banana", "orange"],
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
            "artists": "Hans Zimmer",
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
      const data = await SearchService.query(this.input)
      this.response = data.data.data
      print(this.response)
    }
  }
}
</script>