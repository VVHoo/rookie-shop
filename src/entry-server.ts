import { createApp } from './main'

interface IContext {
  url: string
  state: any
}
export default (context: IContext) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'))
      }
      Promise.all(
        matchedComponents.map(components => {
          let componentAsyncData = (components as any).asyncData
          if (componentAsyncData) {
            return componentAsyncData({
              store,
              route: router.currentRoute
            })
          }
        })
      ).then(() => {
        context.state = store.state
        resolve(app)
      })
    }, reject)
  })
}
