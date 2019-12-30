// @ts-ignore
import http from './axios.config'
import { IBanner } from '@/types/IBanner'

const GETBANNERS = '/main/getBanners' // 获取banners

let getBannersList: () => Promise<IBanner[]> = async () => {
  const {
    data: { banners }
  } = await http({
    url: GETBANNERS,
    method: 'get'
  })
  return banners
}

export { getBannersList }
