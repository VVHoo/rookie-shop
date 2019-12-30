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

module.exports = {
  getBanners
}
