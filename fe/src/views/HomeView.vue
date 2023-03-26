<template>
  <HomePage />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HomePage from '../components/HomePage.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HomePage,
  },

  mounted() {
      let fontAwesome = document.createElement('script')
      //fontAwesome.setAttribute('src', '//go.ezoic.net/ezoic/ezoic.js')
      document.head.appendChild(fontAwesome)
    },
});
</script>
