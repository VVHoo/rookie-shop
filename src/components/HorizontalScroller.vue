<template>
  <div :class="$style['horizontal-wrapper']" ref="horizontalWrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BScroll from 'better-scroll'

@Component
export default class HorizontalScroller extends Vue {
  @Prop({ default: 'card' }) readonly type!: string
  private mounted() {
    this.$nextTick(() => {
      this.initScroll()
    })
  }
  private initScroll() {
    let wrapper = this.$refs.horizontalWrapper as HTMLDivElement
    let scroll = new BScroll(wrapper, {
      scrollX: true,
      startX: 0,
      bounceTime: 500
    })
  }
}
</script>

<style lang="stylus" scoped module>
.horizontal-wrapper
    width: 100%
</style>
