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
      let script = document.createElement('script')
      script.setAttribute('ezoicId', '444400')
      script.setAttribute('src', 'http://go.ezoic.net/ezoic/ezoic.js')
      script.async = true
      document.head.appendChild(script)
    },
}

</script>
