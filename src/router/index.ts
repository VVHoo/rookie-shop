import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export function createRouter() {
  const routes = [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/index'
        },
        {
          path: 'index',
          name: 'index',
          component: () =>
            import(
              /* webpackChunkName: "homePage" */ '../views/indexPage/index.vue'
            )
        },
        {
          path: 'addOrder',
          name: 'addOrder',
          component: () =>
            import(
              /* webpackChunkName: "addOrder" */ '../views/order/addOrder.vue'
            )
        },
        {
          path: 'shoppingCart',
          name: 'shoppingCart',
          component: () =>
            import(
              /* webpackChunkName: "shoppingCart" */ '../views/order/addOrder.vue'
            )
        },
        {
          path: 'profile',
          name: 'profile',
          component: () =>
            import(
              /* webpackChunkName: "profile" */ '../views/profile/mine.vue'
            )
        }
      ]
    }
  ]
  return new VueRouter({
    mode: 'history',
    routes
  })
}
