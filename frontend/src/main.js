import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import Default from './layouts/Default.vue'

loadFonts()

createApp(App)
  .component('default-layout', Default)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
