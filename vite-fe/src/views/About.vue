<template>
    <v-container>
      <!--
      <div style="font-weight: normal; color: darkgray;" class="text-subtitle-1 text-md-h5  pl-4">
          MusicAI is a tool, powered by artificial intelligence, that introduces a new way to discover or find music. Taking advantage of the modern ChatGPT, MusicAI 
          permits you to search music from requests written in natural language
      </div>
      -->
      <v-row class="pb-8" style="align-items: center;">
        <v-col cols="12" sm="2" style="text-align: center;">
          <v-icon class="gradient" @click="remove" :size="smAndDown ? 80 : 80" style="color:darkgrey">mdi-chat</v-icon> 
        </v-col>
        <v-col cols="12" sm="10">
          <div style="font-weight: normal; color: darkgray; text-align: center;" class="text-subtitle-1 text-md-h5 gradient">
            Use an AI based search engine to find music from complex requests written in natural language
          </div>
        </v-col>
      </v-row>
      <v-row class="pb-8" style="align-items: center;">
        <v-col cols="12" sm="2" style="text-align: center;">
          <v-icon class="gradient" @click="remove" :size="smAndDown ? 80 : 80" style="color:darkgrey">mdi-earth</v-icon> 
        </v-col>
        <v-col cols="12" sm="10">
          <div style="font-weight: normal; color: darkgray; text-align: center;" class="text-subtitle-1 text-md-h5 gradient">
            Find your favourite songs or discover new music trying new requests        
          </div>
        </v-col>
      </v-row>
      <v-row class="pb-8" style="align-items: center;">
        <v-col cols="12" sm="2" style="text-align: center;">
          <v-icon class="gradient" @click="remove" :size="smAndDown ? 80 : 80" style="color:darkgrey">mdi-headphones</v-icon> 
        </v-col>
        <v-col cols="12" sm="10">
          <div style="font-weight: normal; color: darkgray; text-align: center;" class="text-subtitle-1 text-md-h5 gradient">
            Listen a preview or open the music directly on your Spotify application
          </div>
        </v-col>
      </v-row>
      <v-divider/>
    </v-container>
</template>
  
<style scoped>
  
</style>
  
<script>
  import { useDisplay } from 'vuetify'

  export default {
    name: 'AboutPage',
    props: [],
    components: {
      
    },
  
    data: () => ({
      
    }),
  
    methods: {
      

    },

    setup () {
      const { xs, smAndDown } = useDisplay()
          return { xs, smAndDown }
    },
  }
</script>
  