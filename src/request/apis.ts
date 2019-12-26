import { AxiosResponse } from 'axios'
// @ts-ignore
import { _get } from './axios.config'

const GETBANNERS = '/getBanners' // 获取banners

let getBannersList: () => Promise<AxiosResponse> = () => {
  return _get({
    url: GETBANNERS
  })
}

export { getBannersList }
