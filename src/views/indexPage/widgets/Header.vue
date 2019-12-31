<template>
  <div :class="$style.header">
    <div :class="$style.location">
      <van-icon name="location-o" />
      <span>广州</span>
      <van-icon name="arrow-down" :class="$style.arrow" />
    </div>
    <div :class="$style['search-bar']"></div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import Icon from 'vant/lib/icon'
import 'vant/lib/style/base.css'
import 'vant/lib/icon/index.css'

@Component({
  components: {
    'van-icon': Icon
  }
})
export default class Header extends Vue {}
</script>

<style lang="stylus" scoped module>
@import "../../../style/var.styl"
@import "../../../style/mixins/layout.styl"
.header
    spaceBetween()
    position: fixed
    top: 0
    width: 100%
    height: 54px
    padding: 0 13px
    z-index: 10
    .location
        verticalCenter()
        width: 90px
        height: 30px
        padding: 0 10px
        line-height: 30px
        text-align: center
        border-radius: 26px
        background-color: $grey
        i
            display: inline-block
            &.arrow
                font-size: $font-size-xs
        span
            display: inline-block
            margin: 0 6px
            font-size: $font-size-md
            lines-over-flow(1)
    .search-bar
        width: 251px
        height: 30px
        margin-left: 10px
        border-radius: 26px
        background-color: $white
</style>
