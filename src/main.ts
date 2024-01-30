import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import loadComponents from '@/components/_globals'
import router from './router'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

const app = createApp(App)

// Load the `_base-*.vue` components globally.
loadComponents(app)

app.use(createPinia())
app.use(router)

enableMocking().then(() => {
  app.mount('#app')
})
