<template>
<v-card>
    <h1>Log in to Spotify using Authorization Code flow</h1>
    <v-btn class="btn btn-primary" v-on:click="login">
        Log in with Spotify
    </v-btn>
</v-card>
</template>
      
<style scoped>
</style>

<script>
import { mapActions, mapGetters} from 'vuex'

export default {
    name: 'LoginSpotifyDialog',
    methods: {
        ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters(['isSpotifyLoggedIn', 'getSpotifyUser'])
    }

}
</script>
      