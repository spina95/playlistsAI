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
  name: 'LoginGoogle',

  methods: {
    ...mapActions(['continueGoogleOAuth'])
  },
  created() {
    this.continueGoogleOAuth(window.location)
  }
}
</script>
