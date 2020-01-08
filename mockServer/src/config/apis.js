const Mock = require('mockjs')

const getBanners = () => {
  return Mock.mock({
    'banners|3': [
      {
        imgUrl: Mock.Random.image('480x300'),
        href: Mock.Random.url()
      }
    ]
  })
}

const getDefaultStore = storeId => {
  return Mock.mock({
    'categories|10': [
      {
        cid: Mock.Random.natural(10, 100),
        icon: Mock.Random.image('50x60'),
        text: Mock.Random.cword(3)
      }
    ],
    notice: ''
  })
}

module.exports = {
  getBanners,
  getDefaultStore
}
