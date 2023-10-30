import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'
// Firebase
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.use(router)
app.use(VueFire, {
firebaseApp,
  modules: [VueFireAuth()],
})


app.mount('#app')
