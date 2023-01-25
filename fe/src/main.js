import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import ApiService from "./common/api.service";
import { store } from './store'
import '@/assets/global.css';

loadFonts()
ApiService.init();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')
