<template>
  <v-container>
    <h2>Authenticating...</h2>
  </v-container>
</template>

<style scoped>
  
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginSpotify',

  methods: {
    ...mapActions(['continueOAuth'])
  },
  created() {
    this.continueOAuth(window.location)
  }
}
</script>
