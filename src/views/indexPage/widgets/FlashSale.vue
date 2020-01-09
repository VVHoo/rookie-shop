<template>
  <div :class="$style['flash-sale']">
    <div :class="$style.header">
      <div :class="$style.title">
        <span>限时抢购</span>
      </div>
      <div :class="$style.more">
        <span>更多</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <horizontal-scroller :class="$style.scroller">
      <div :class="$style.list" :style="`width: ${scrollWidth}px`">
        <div
          :class="$style.card"
          v-for="(item, index) in list"
          :key="index"
          ref="card"
        >
          <div :class="$style.container">
            <div :class="$style.imgbox">
              <img :src="item.img" alt="" />
            </div>
            <p :class="$style.name">{{ item.name }}</p>
            <div :class="$style.bottom">
              <div :class="$style.price">
                <p>￥{{ item.price }}</p>
                <del :class="$style.origin">￥{{ item.originPrice }}</del>
              </div>
              <div :class="$style['btn-buy']">抢</div>
            </div>
          </div>
        </div>
      </div>
    </horizontal-scroller>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from 'vant/lib/icon'
import HorizontalScroller from '@/components/HorizontalScroller.vue'
import FlashGood from '@/entities/FlashGood'
import 'vant/lib/icon/index.css'

@Component({
  components: {
    'van-icon': Icon,
    'horizontal-scroller': HorizontalScroller
  }
})
export default class FlashSale extends Vue {
  @Prop(Array) readonly list!: Array<FlashGood>
  scrollWidth: number = 1000
  private mounted() {
    this.calculateWidth()
  }
  private calculateWidth() {
    if (this.list.length) {
      let card = this.$refs.card as HTMLDivElement[]
      this.scrollWidth = card[0].clientWidth * this.list.length + 13
    } else {
      this.scrollWidth = 1000
    }
  }
}
</script>

<style lang="stylus" scoped module>
@import "../../../style/indexPage/flashSale.styl"
</style>
