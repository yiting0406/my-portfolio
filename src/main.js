// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import Tailwind CSS
import './assets/tailwind.css'

// Import PrimeVue and its CSS
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
