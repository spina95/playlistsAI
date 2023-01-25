<template>
  <v-container style="width: 70%">
    Authenticating...
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
