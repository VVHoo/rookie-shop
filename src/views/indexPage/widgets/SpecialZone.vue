<template>
  <div :class="$style['special-zone']">
    <div :class="$style.title">
      <span>特色专区</span>
    </div>
    <div :class="$style.container">
      <div :class="$style.left"></div>
      <div :class="$style.right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SpecialZone extends Vue {}
</script>

<style lang="stylus" scoped module>
@import "../../../style/var.styl"
.special-zone
    width: 100%
    margin: 10px 0
    padding: 0 13px
    .title
        color: $text-color-black
        font-weight: bold
        font-size: $font-size-title
</style>
