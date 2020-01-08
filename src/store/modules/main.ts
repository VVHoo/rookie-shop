import { ActionTree, MutationTree } from 'vuex'
import { getDefaultStore } from '@/service/main'
import { GETDEFAULTSTORE } from '../mutations-types'
import { IMainStore } from '@/types/IMainStore'

const state: IMainStore = {
  categories: [],
  notice: ''
}

const actions: ActionTree<IMainStore, any> = {
  getStoreInfo: async ({ state, commit }, storeId) => {
    if (!state.categories.length) {
      const res = await getDefaultStore(storeId)
      commit(GETDEFAULTSTORE, res)
    }
  }
}

const mutations: MutationTree<IMainStore> = {
  [GETDEFAULTSTORE](state, data: IMainStore) {
    state.categories = data.categories
    state.notice = data.notice
  }
}

export default {
  state,
  actions,
  mutations
}
