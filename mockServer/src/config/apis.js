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

const getFlashList = () => {
  return Mock.mock({
    'flashList|12': [
      {
        gid: Mock.Random.natural(),
        img: Mock.Random.image('78x78'),
        name: Mock.Random.cparagraph(10),
        price: Mock.Random.float(1, 99, 0, 2),
        originPrice: Mock.Random.float(1, 99, 2, 2)
      }
    ]
  })
}

module.exports = {
  getBanners,
  getDefaultStore,
  getFlashList
}
