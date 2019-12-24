import { createApp } from './main'

const { app, router, store } = createApp()

const initialState = (window as any).__INITIAL_STATE__
if (initialState) {
  store.replaceState(initialState)
}
router.onReady(() => {
  app.$mount('#app')
})
