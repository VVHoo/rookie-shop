<template>
  <div :class="$style.navs">
    <div
      v-for="(item, index) in categories"
      :key="index"
      :class="$style['nav-item']"
    >
      <img :src="item.icon" alt="" />
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { ICategory } from '@/store/modules/main'

@Component
export default class Navs extends Vue {
  @State(state => state.main.categories) private categories!: ICategory[]
}
</script>

<style lang="stylus" scoped module>
@import "../../../style/var.styl"
.navs
    padding-top: 10px
    .nav-item
        display: inline-block
        width: 20%
        margin-bottom: 10px
        text-align: center
        img
            margin: 0 auto
            display: block
        span
            color: $text-color-normal
            font-size: $font-size-md
</style>
