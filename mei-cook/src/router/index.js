import Vue from 'vue'
import Router from 'vue-router'
import homeRoute from './homeRoute'
import categoryRoute from './categoryRoute'
import discountRouter from './discountRouter'
import cartRoute from './cartRoute'
import mineRoute from './mineRoute'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRoute,
    categoryRoute,
    discountRouter,
    cartRoute,
    mineRoute,
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
