<template>
  <v-container style="width: 70%">
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="title gradient display-2 font-weight-bold">
          MusicAI
        </h1>
        <v-row>
          <v-col :cols="mdAndDown ? 12 : 4">
            <IconTitle icon="mdi-chat" text="Ask" justify="center" />
          </v-col>
          <v-col :cols="mdAndDown ? 12 : 4">
            <IconTitle icon="mdi-earth" text="Explore" justify="center" />
          </v-col>
          <v-col :cols="mdAndDown ? 12 : 4">
            <IconTitle icon="mdi-headphones" text="Listen" justify="center" />
          </v-col>         
        </v-row>
        <div style="height: 50px;"/>
        <div class="d-block d-sm-none">xs</div>
<div class="d-none d-sm-block d-md-none">sm</div>
<div class="d-none d-md-block d-lg-none">md</div>
<div class="d-none d-lg-block d-xl-none">lg</div>
<div class="d-none d-xl-block">xl</div>
        <h2>Try some examples:</h2>
        <div v-for="example in examples" :key="example">
          <h3 class="example" @click="search_example(example)">"{{ example }}"</h3>
        </div>
        <SearchBar :search-text="searchText"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .title {
    font-size: 12vw;
  }

  .example {
    cursor: pointer;
    color: darkgrey;
  }

  .example:hover {
    color: white;
  }
</style>

<script>

import SearchBar from "./SearchBar.vue"
import IconTitle from "./IconTitle.vue"
import { useDisplay } from 'vuetify'

export default {
  name: 'HomePage',

  setup () {
    const { xs, mdAndDown } = useDisplay()
    return { xs, mdAndDown }
  },

  components: {
    SearchBar,
    IconTitle,
  },

  data: () => ({
    examples: [
      "Suggest me 10 soundtracks from the movies of Steven Spielberg released before 2005",
      "Find 8 rock songs which talk about dogs",
      "Suggest me some chill piano pieces to listen while studying"
    ],
    searchText: ""
  }),

  methods: {
    search_example(example){
      console.log(example)
      this.$router.replace({ name: "home", query: {query: example} })
    }
  }
}
</script>
