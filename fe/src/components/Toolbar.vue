<template>
  <v-app-bar elevation="0" app color="background" text>
    <router-link style="cursor: pointer; text-decoration: none; color: inherit;" to="/home">
      <h1 class="title gradient font-weight-bold pa-5">
        MusicAI
      </h1>
    </router-link>
    <v-spacer></v-spacer>
    
  </v-app-bar>
</template>

<style>
.v-app-bar {
border-bottom: 2px solid rgb(36, 36, 36);
}
</style>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
  name: 'ToolBar',
  components: {
  
  },
  data: () => ({
    user: null
  }),
  methods: {
    ...mapActions(['spotifyLogin', 'spotifyLogout', 'continueAuth', 'authLogout']),
    login() {
      this.$router.push({ name: 'login' })
    },
    nvaigateToPlaylists() {
      this.$router.push({ name: 'playlists' })
    },
  },
  mounted() {
    this.user = this.getAuthUser
    console.log(this.user)
  },
  computed: {
      ...mapGetters(['isSpotifyLoggedIn', 'getSpotifyUser', 'getAuthUser', 'isAuthLoggedIn'])
  }
}
</script>