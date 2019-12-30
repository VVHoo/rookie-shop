import Mock, { Random } from 'mockjs'

export default function init() {
  Mock.mock('http://127.0.0.1:3000/main/getBanners', 'get', {
    'banners|1-2': [
      {
        imgUrl: Random.image('600x200'),
        href: Random.url()
      }
    ]
  })
}
