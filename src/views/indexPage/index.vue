<template>
  <PullRefresh
    :class="$style['index-page']"
    v-model="isLoading"
    @refresh="onRefresh"
    success-text="刷新成功"
  >
    <Header />
    <swipe :autoplay="8000" indicator-color="#EC6130" :class="$style.banner">
      <swipe-item v-for="(image, index) in banners" :key="index">
        <router-link :to="image.href">
          <img :src="image.imgUrl" alt="" />
        </router-link>
      </swipe-item>
    </swipe>
    <Navs />
    <SpecialZone />
    <FlashSale :list="flashList" :endTime="endTime" />
  </PullRefresh>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Swipe from 'vant/lib/swipe'
import SwipeItem from 'vant/lib/swipe-item'
import Header from './widgets/Header.vue'
import Navs from './widgets/Navs.vue'
import SpecialZone from './widgets/SpecialZone.vue'
import FlashSale from './widgets/FlashSale.vue'
import PullRefresh from 'vant/lib/pull-refresh'
import { getBannersList, getFlashList } from '@/service/main'
import { IMainStore } from '@/types/IMainStore'
import Banner from '@/entities/Banner'
import FlashGood from '@/entities/FlashGood'
import { Store } from 'vuex'
import { Action } from 'vuex-class'
import 'vant/lib/style/base.css'
import 'vant/lib/swipe/index.css'
import 'vant/lib/swipe-item/index.css'
import 'vant/lib/loading/index.css'
import 'vant/lib/pull-refresh/index.css'

@Component({
  components: {
    swipe: Swipe,
    'swipe-item': SwipeItem,
    Header,
    Navs,
    SpecialZone,
    FlashSale,
    PullRefresh
  }
})
export default class Index extends Vue {
  static asyncData({ store }: { store: Store<IMainStore> }) {
    return store.dispatch('getStoreInfo')
  }
  @Action private getStoreInfo!: (storeId: number) => void
  banners: Banner[] = []
  isLoading: boolean = false
  flashList: FlashGood[] = []
  endTime: number = 0
  private mounted() {
    // 获取banner
    this.getBanners()
    // 获取店铺基本信息
    this.getDefaultStore()
    this.getFlashSale()
  }
  private async getBanners() {
    this.banners = await getBannersList()
  }
  private async getDefaultStore() {
    const storeId = parseInt(this.$route.params.storeId)
    this.getStoreInfo(storeId)
  }
  private async getFlashSale() {
    const data = await getFlashList()
    this.flashList = data.flashList
    this.endTime = data.endTime
  }
  private async onRefresh() {
    await this.getBanners()
    await this.getDefaultStore()
    await this.getFlashSale()
    this.isLoading = false
  }
}
</script>

<style lang="stylus" scoped module>
.index-page
    height: 100%
    .banner
        min-height: 230px
        img
            display: block
</style>
