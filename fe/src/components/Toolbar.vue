<template>
  <v-app-bar elevation="0" app color="background" text>
    <router-link style="cursor: pointer; text-decoration: none; color: inherit;" to="/home">
      <h1 class="title gradient font-weight-bold pa-5">
        MusicAI
      </h1>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn v-if="!isSpotifyLoggedIn" prepend-icon="mdi-spotify" v-on:click="spotifyLogin" class="export-button icon-button">
      Connect
    </v-btn>

    <v-menu  v-if="isSpotifyLoggedIn">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="export-button icon-button"
          prepend-icon="mdi-spotify"
        >
          {{ getSpotifyUser }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-btn v-on:click="spotifyLogout">
              Disconnect
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    
    <v-btn v-if="!isAuthLoggedIn" flat target="_blank">
      <span class="mr-2" v-on:click="login">Login</span>
    </v-btn>
    <v-menu  v-if="isAuthLoggedIn">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          {{ getAuthUser }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <v-btn v-on:click="nvaigateToPlaylists">
              Playlists
            </v-btn>
          </v-list-item-title>
          <v-list-item-title>
            <v-btn v-on:click="authLogout">
              Disconnect
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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