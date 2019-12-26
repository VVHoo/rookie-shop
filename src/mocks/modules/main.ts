import Mock, { Random } from 'mockjs'

export default function init() {
  Mock.mock('/getBanners', {
    'banners|1-2': [
      {
        imgUrl: Random.image('600x200'),
        href: Random.url()
      }
    ]
  })
}
