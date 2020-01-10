import { createApp } from './main'
import { createSentry } from '@/sentry'

const { app, router, store } = createApp()

const initialState = (window as any).__INITIAL_STATE__
if (initialState) {
  store.replaceState(initialState)
}
router.onReady(() => {
  app.$mount('#app')
  let isDev = process.env.NODE_ENV === 'development'
  if (!isDev) {
    createSentry()
  }
})
