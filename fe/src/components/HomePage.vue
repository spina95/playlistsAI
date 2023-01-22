<template>
  <v-container style="width: 70%">
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="title gradient display-2 font-weight-bold mb-3">
          PlaylistsAI
        </h1>
        <v-row align="center" justify="center">
            <v-icon size="65" class="gradient">mdi-chat</v-icon>        
            <h2 class="subtitle gradient font-weight-bold">Ask</h2>
            <v-spacer/>
            <v-icon size="65" class="gradient">mdi-earth</v-icon>        
            <h2 class="subtitle gradient font-weight-bold">Explore</h2>
            <v-spacer/>
            <v-icon size="65" class="gradient">mdi-music-note</v-icon>        
            <h2 class="subtitle gradient font-weight-bold">Listen</h2>
        </v-row>
        <SearchBar/>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<style scoped>
  .example {
    color: red;
  }
  .title {
    font-size: 120px;
  }
  .subtitle {
    font-size: 60px;
    text-align: center;
  }
  .gradient {
    background: linear-gradient(.25turn, #01C780, 50%, #01A3C7);;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>

<script>

import SearchBar from "./SearchBar.vue"
import { mdiChat } from '@mdi/js';

export default {
  name: 'HomePage',

  components: {
    SearchBar,
  },

  data: () => ({
    icons: {
      mdiChat
    },
  }),
}
</script>
