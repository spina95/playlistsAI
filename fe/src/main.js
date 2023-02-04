import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import ApiService from "./common/api.service";
import { store } from './store'
import '@/assets/global.css';
import vue3GoogleLogin from 'vue3-google-login'

loadFonts()
ApiService.init();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .use(vue3GoogleLogin, {
    clientId: '220413848347-e6u5a418eilqgddq0fd4gl4kcd80clc1.apps.googleusercontent.com',
    scope: 'openid https://www.googleapis.com/auth/gmail.send'
  })
  .mount('#app')
