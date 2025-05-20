import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faSun,
  faMoon,
  faBell,
  faLock,
  faUnlock,
  faPrint,
  faHome,
  faInfoCircle,
  faTableCellsLarge,
  faFolderOpen,
  faChevronRight,
  faChevronDown,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import '@/assets/global.css'

library.add(
  faBars,
  faSun,
  faMoon,
  faBell,
  faLock,
  faUnlock,
  faPrint,
  faHome,
  faInfoCircle,
  faTableCellsLarge,
  faFolderOpen,
  faChevronRight,
  faChevronDown,
  faEnvelope
)

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

const currentTheme = localStorage.getItem('theme') || 'light'
document.documentElement.setAttribute('data-theme', currentTheme)