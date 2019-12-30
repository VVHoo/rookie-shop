const Koa = require('koa')
const config = require('./config')
const routers = require('./routers')
const cors = require('@koa/cors')

const app = new Koa()

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
)

app.use(routers.routes(), routers.allowedMethods())

app.listen(config.serverPort, () => {
  console.log('server is running')
})
