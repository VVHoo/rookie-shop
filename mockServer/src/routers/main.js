const Router = require('koa-router')
const router = new Router()
const statusCode = require('../config/statusCode')
const { getBanners, getDefaultStore, getFlashList } = require('../config/apis')

router.get('/banners', async ctx => {
  const resData = await getBanners()
  ctx.body = {
    code: statusCode.SUCCESS,
    message: 'success',
    data: resData
  }
})

router.get('/default/store', async ctx => {
  const { storeId } = ctx.query
  const resData = await getDefaultStore(storeId)
  ctx.body = {
    code: statusCode.SUCCESS,
    message: 'success',
    data: resData
  }
})

router.get('/flash', async ctx => {
  const resData = await getFlashList()
  ctx.body = {
    code: statusCode.SUCCESS,
    message: 'success',
    data: resData
  }
})

module.exports = router
