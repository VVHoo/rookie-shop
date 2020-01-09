<template>
  <div :class="$style['index-page']">
    <Header />
    <swipe :autoplay="8000" indicator-color="#EC6130" :class="$style.banner">
      <swipe-item v-for="(image, index) in banners" :key="index">
        <router-link :to="image.href">
          <img :src="image.imgUrl" alt="" />
        </router-link>
      </swipe-item>
    </swipe>
    <Navs />
    <FlashSale :list="flashList" v-if="flashList.length" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Swipe from 'vant/lib/swipe'
import SwipeItem from 'vant/lib/swipe-item'
import Header from './widgets/Header.vue'
import Navs from './widgets/Navs.vue'
import FlashSale from './widgets/FlashSale.vue'
import { getBannersList, getFlashList } from '@/service/main'
import { IMainStore } from '@/types/IMainStore'
import Banner from '@/entities/Banner'
import FlashGood from '@/entities/FlashGood'
import { Store } from 'vuex'
import { Action } from 'vuex-class'
import 'vant/lib/style/base.css'
import 'vant/lib/swipe/index.css'
import 'vant/lib/swipe-item/index.css'

@Component({
  components: {
    swipe: Swipe,
    'swipe-item': SwipeItem,
    Header,
    Navs,
    FlashSale
  }
})
export default class Index extends Vue {
  static asyncData({ store }: { store: Store<IMainStore> }) {
    return store.dispatch('getStoreInfo')
  }
  @Action private getStoreInfo!: (storeId: number) => void
  banners: Banner[] = []
  flashList: FlashGood[] = []
  private mounted() {
    // 获取banner
    this.getBanners()
    // 获取店铺基本信息
    this.getDefaultStore()
    this.getFlashSale()
  }
  private async getBanners() {
    const data = await getBannersList()
    this.banners = data
  }
  private async getDefaultStore() {
    const storeId = parseInt(this.$route.params.storeId)
    this.getStoreInfo(storeId)
  }
  private async getFlashSale() {
    this.flashList = await getFlashList()
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
