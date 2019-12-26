<template>
  <div :class="$style['index-page']"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Store } from 'vuex'
import { IMainStore } from '@/store/modules/main'
@Component
export default class Index extends Vue {
  asyncData({ store }: { store: Store<IMainStore> }) {
    return store.dispatch('getBanners')
  }
}
</script>

<style lang="stylus" scoped module>
.index-page
    height: 100%
</style>
