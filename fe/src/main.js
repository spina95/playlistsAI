import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import ApiService from "./common/api.service";
import { store } from './store'
import '@/assets/global.css';
import vue3GoogleLogin from 'vue3-google-login'
import ScriptX from 'vue-scriptx'
import { createHead } from "@vueuse/head"

const head = createHead({
  script: [ { type: 'text/javascript', src: 'http//go.ezoic.net/ezoic/ezoic.js', async: true } ],
})

loadFonts()
ApiService.init();


createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .use(ScriptX)
  .use(vue3GoogleLogin, {
    clientId: '220413848347-e6u5a418eilqgddq0fd4gl4kcd80clc1.apps.googleusercontent.com',
    scope: 'openid https://www.googleapis.com/auth/gmail.send'
  })
  .use(head)
  .mount('#app')
