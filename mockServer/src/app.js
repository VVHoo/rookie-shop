const Koa = require('koa')
const config = require('./config')
const routers = require('./routers')
const cors = require('@koa/cors')

const app = new Koa()

app.use(
  cors({
    origin: function(ctx) {
      //设置允许来自指定域名请求
      const whiteList = ['http://localhost:3000', 'http://localhost:8080'] //可跨域白名单
      let url = ctx.header.origin
      if (whiteList.includes(url)) {
        return url //注意，这里域名末尾不能带/，否则不成功，所以在之前我把/通过substr干掉了
      }
      return 'http://localhost:3000' // 默认允许本地请求3000端口可跨域
    },
    credentials: true
  })
)

app.use(routers.routes(), routers.allowedMethods())

app.listen(config.serverPort, () => {
  console.log('server is running')
})
