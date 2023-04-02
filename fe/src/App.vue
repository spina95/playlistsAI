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
    /*
      const googleSignInScript = document.createElement('script');
      googleSignInScript.setAttribute('ezoicId', '444400')
      googleSignInScript.setAttribute(
        'src',
        'http://go.ezoic.net/ezoic/ezoic.js'
      );
      googleSignInScript.setAttribute('async', 'true');
      googleSignInScript.setAttribute('defer', 'true');
      document.head.appendChild(googleSignInScript);
      */
    }
}

</script>
