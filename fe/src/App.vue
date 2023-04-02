<template>
  <div id="add-script-here" />
  <v-app>
    <Toolbar />
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import postscribe from '/src/plugins/postscribe.client'

export default {
  name: 'App',
  components: {
    Toolbar
  },
  data: () => ({
    //
  }),
  mounted () {
    // eslint-disable-next-line no-useless-escape
    postscribe('#add-script-here', '<script ezoicId=444400 src=http://go.ezoic.net/ezoic/ezoic.js><\/script>')

    // If you need to do something onload, then instead of the line above do it like this:
    // this.$postscribe('#add-script-here', '<script onload="DO_SOMETHING_ONLOAD_HEAR" src="SCRIPT_URL"><\/script>')
  }
}

</script>
