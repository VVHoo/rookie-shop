<template>
  <div :class="$style['flash-sale']">
    <div :class="$style.header">
      <div :class="$style.title">
        <span>限时抢购</span>
        <CountDown :time="endTime" :class="$style['count-down']" />
      </div>
      <div :class="$style.more">
        <span>更多</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div :class="$style.scroller" v-if="list.length">
      <div :class="$style.list">
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from 'vant/lib/icon'
import CountDown from 'vant/lib/count-down'
import FlashGood from '@/entities/FlashGood'
import 'vant/lib/icon/index.css'
import 'vant/lib/count-down/index.css'

@Component({
  components: {
    'van-icon': Icon,
    CountDown
  }
})
export default class FlashSale extends Vue {
  @Prop(Array) readonly list!: Array<FlashGood>
  @Prop(Number) readonly endTime!: number
}
</script>

<style lang="stylus" scoped module>
@import "../../../style/indexPage/flashSale.styl"
</style>
