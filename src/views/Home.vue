<template>
  <div class="home">
    <router-view />
    <tab-bar fixed route v-model="active" active-color="#07c160">
      <tab-bar-item
        replace
        v-for="(item, index) in tabItems"
        :key="index"
        :icon="item.icon"
        :to="item.path"
      >
        {{ item.label }}
      </tab-bar-item>
    </tab-bar>
    <div :class="$style.blank"></div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import TabBar from 'vant/lib/tabbar'
import TabBarItem from 'vant/lib/tabbar-item'
import 'vant/lib/style/base.css'
import 'vant/lib/tabbar/index.css'
import 'vant/lib/tabbar-item/index.css'
import 'vant/lib/icon/index.css'

interface ITabItems {
  path: string
  icon: string
  label: string
}
@Component({
  components: {
    'tab-bar': TabBar,
    'tab-bar-item': TabBarItem
  }
})
export default class Home extends Vue {
  tabItems: ITabItems[] = [
    {
      path: '/index',
      icon: 'wap-home-o',
      label: '首页'
    },
    {
      path: '/addOrder',
      icon: 'orders-o',
      label: '去下单'
    },
    {
      path: '/shoppingCart',
      icon: 'shopping-cart-o',
      label: '购物车'
    },
    {
      path: '/profile',
      icon: 'manager-o',
      label: '我的'
    }
  ]
  private active: string = '/index'
}
</script>
<style lang="stylus" module scoped>
.blank
    height: 50px
</style>
