import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../components/Landing'
import Tiles from '../views/Tiles'

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
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
