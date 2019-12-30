const Router = require('koa-router')
const router = new Router()
const statusCode = require('../config/statusCode')
const { getBanners } = require('../config/apis')

router.get('/getBanners', async ctx => {
  const resData = await getBanners()
  ctx.body = {
    code: statusCode.SUCCESS,
    message: 'success',
    data: resData
  }
})

module.exports = router
