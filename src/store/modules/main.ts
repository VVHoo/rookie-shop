import { ActionTree, MutationTree } from 'vuex'
import { getBannersList } from '@/request/apis'

export interface IBanner {
  imgUrl: string
  href: string
}
export interface IMainStore {
  banners: IBanner[]
}

const state: IMainStore = {
  banners: []
}

const actions: ActionTree<IMainStore, any> = {
  getBanners: async ({ state, commit }) => {
    const res = await getBannersList()
    console.log(res)
  }
}

const mutations: MutationTree<IMainStore> = {}

export default {
  state,
  actions,
  mutations
}
