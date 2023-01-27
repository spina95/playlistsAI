<template>
    <v-app-bar elevation="0" app color="background" text>
      <router-link style="cursor: pointer; text-decoration: none; color: inherit;" to="/">
        <h1 class="title gradient font-weight-bold pa-5">
          MusicAI
        </h1>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLoggedIn" v-on:click="login" class="export-button icon-button">
        <v-icon right dark > mdi-spotify </v-icon>  
        Connect
      </v-btn>

      <v-menu  v-if="isLoggedIn">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            class="export-button icon-button"
          >
          <v-icon right dark > mdi-spotify </v-icon>  
          {{ getUser }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn v-on:click="logout">
                Disconnect
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
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
    data: () => ({

    }),
    methods: {
      ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters(['isLoggedIn', 'getUser'])
    }
}
</script>
