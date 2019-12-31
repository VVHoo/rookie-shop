<template>
  <div :class="$style['index-page']">
    <Header />
    <swipe :autoplay="8000">
      <swipe-item v-for="(image, index) in banners" :key="index">
        <img :src="image.imgUrl" alt="" />
      </swipe-item>
    </swipe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Swipe from 'vant/lib/swipe'
import SwipeItem from 'vant/lib/swipe-item'
import Header from './widgets/Header.vue'
import { getBannersList } from '@/service/apis'
import { IBanner } from '@/types/IBanner'
import 'vant/lib/style/base.css'
import 'vant/lib/swipe/index.css'
import 'vant/lib/swipe-item/index.css'
@Component({
  components: {
    swipe: Swipe,
    'swipe-item': SwipeItem,
    Header
  }
})
export default class Index extends Vue {
  banners: IBanner[] = []
  private mounted() {
    this.getBanners()
  }
  private async getBanners() {
    const data = await getBannersList()
    this.banners = data
  }
}
</script>

<style lang="stylus" scoped module>
.index-page
    height: 100%
</style>
