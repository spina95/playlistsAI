<template>
  <v-container>
        <!-- Ezoic - top_of_page - top_of_page -->
    <div id="ezoic-pub-ad-placeholder-115" style="height: 100px;"> </div>
    <!-- End Ezoic - top_of_page - top_of_page -->
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="title gradient display-2 font-weight-bold text-h2 text-sm-h1 pa-8">
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
        <div style="height: 40px;"/>
        <h2 class="font-weight-bold text-subtitle-1 text-md-h6 pt-10" style="color: darkgray;">Try some examples:</h2>
        <div v-for="example in examples" :key="example">
          <h2 class="example text-subtitle-1 text-md-h6 pb-2" @click="search_example(example)">"{{ example }}"</h2>
        </div>
        <SearchBar :search-text="searchText"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

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
      "Find the songs that have won an Oscar in the last 10 years",
      "Find 10 songs of british singers released last year"
    ],
    searchText: ""
  }),

  methods: {
    search_example(example){
      console.log(example)
      this.$router.replace({ name: "home", query: {search: example} })
    }
  }
}
</script>
