import http from './axios.config'
import { IMainStore } from '@/types/IMainStore'
import { IBanner } from '@/types/IBanner'
import FlashGood from '@/entities/FlashGood'

const GETBANNERS = '/main/banners' // 获取banners
const GETDEFAULTSTORE = '/main/default/store' // 获取店铺默认信息
const GETFLASHLIST = '/main/flash'

let getBannersList: () => Promise<IBanner[]> = async () => {
  const {
    data: { banners }
  } = await http({
    url: GETBANNERS,
    method: 'get'
  })
  return banners
}

let getDefaultStore: (
  storeId: number
) => Promise<IMainStore> = async storeId => {
  const { data } = await http({
    url: GETDEFAULTSTORE,
    method: 'get',
    params: {
      storeId: storeId
    }
  })
  return data
}

let getFlashList: () => Promise<FlashGood[]> = async () => {
  const {
    data: { flashList }
  } = await http({
    url: GETFLASHLIST,
    method: 'get'
  })
  return flashList
}

export { getBannersList, getDefaultStore, getFlashList }
