import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import ApiService from "./common/api.service";

loadFonts()
ApiService.init();

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
