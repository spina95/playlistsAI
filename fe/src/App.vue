<template>
  <v-app>
    <Toolbar />
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    Toolbar
  },
  data: () => ({
    //
  }),
  mounted() {
      let fontAwesome = document.createElement('script')
      fontAwesome.setAttribute('ezoicId', '444400')
      fontAwesome.setAttribute('src', 'http://go.ezoic.net/ezoic/ezoic.js')
      document.head.appendChild(fontAwesome)
    },
}

</script>
