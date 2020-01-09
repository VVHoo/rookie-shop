<template>
  <div :class="$style.header">
    <NoticeBar v-if="notice" left-icon="volume-o">
      {{ notice }}
    </NoticeBar>
    <div :class="$style['location-wrapper']">
      <div :class="$style.location">
        <van-icon name="location-o" />
        <span>广州</span>
        <van-icon name="arrow-down" :class="$style.arrow" />
      </div>
      <div :class="$style['search-bar']"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import NoticeBar from 'vant/lib/notice-bar'
import Icon from 'vant/lib/icon'
import 'vant/lib/icon/index.css'
import 'vant/lib/notice-bar/index.css'

@Component({
  components: {
    'van-icon': Icon,
    NoticeBar
  }
})
export default class Header extends Vue {
  @State(state => state.main.notice) private notice!: string
}
</script>

<style lang="stylus" scoped module>
@import "../../../style/var.styl"
@import "../../../style/mixins/layout.styl"
.header
    position: fixed
    top: 0
    width: 100%
    height: 54px
    z-index: 10
    .location-wrapper
        spaceBetween()
        padding: 0 13px
        margin-top: 10px
        .location
            verticalCenter()
            width: 90px
            height: 30px
            padding: 0 10px
            line-height: 30px
            text-align: center
            border-radius: 26px
            background-color: $grey
            opacity: .5;
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
