export default function initMockService() {
  const modulesContext = require.context('./modules/', false, /\.ts$/)
  modulesContext.keys().forEach(key => {
    modulesContext(key).default()
  })
}
