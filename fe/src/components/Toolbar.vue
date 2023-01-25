<template>
    <v-app-bar elevation="0" app color="background" text>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLoggedIn" v-on:click="login" class="export-button icon-button">
        <v-icon right dark > mdi-spotify </v-icon>  
        Connect
      </v-btn>
      <v-btn v-if="isLoggedIn" v-on:click="login" class="export-button icon-button">
        <v-icon right dark > mdi-spotify </v-icon>  
        {{ getUser }}
      </v-btn>
      <v-btn
        flat
        href=""
        target="_blank"
      >
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn
        flat
        href=""
        target="_blank"
      >
        <span class="mr-2">Signup</span>
      </v-btn>
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
    data: function () {
      return {
      }
    },
    methods: {
      ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters(['isLoggedIn', 'getUser'])
    }
}
</script>
