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
import postscribe from 'postscribe';


export default {
  name: 'App',
  components: {
    Toolbar
  },
  data: () => ({
    //
  }),
  mounted() {

      
      const googleSignInScript = document.createElement('script');
      googleSignInScript.setAttribute('ezoicId', '444400')
      googleSignInScript.setAttribute(
        'src',
        'http://go.ezoic.net/ezoic/ezoic.js'
      );
      //document.head.appendChild(googleSignInScript);
      console.log("TEST")
      console.log(googleSignInScript)
      postscribe(document.head, googleSignInScript);
    }
}

</script>
