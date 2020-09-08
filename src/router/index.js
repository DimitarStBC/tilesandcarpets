import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../components/Landing'
import Tiles from '../views/Tiles'
import Parquet from '../views/Parquet'
import Carpet from '../views/Carpet'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/tiles',
    name: 'Tiles',
    component: Tiles
  },
  {
    path: '/parquet',
    name: 'Parquet',
    component: Parquet
  },
  {
    path: '/carpets',
    name: 'Carpet',
    component: Carpet
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
