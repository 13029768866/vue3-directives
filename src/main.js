import { createApp } from 'vue'
import App from './App.vue'
import style from './style.css'
import Directives from './directives/index.js'

createApp(App).use(Directives).mount('#app')
