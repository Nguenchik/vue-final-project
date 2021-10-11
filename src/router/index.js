import Vue from 'vue'
import VueRouter from 'vue-router'
import Schedule from '@/components/Schedule'
import categories from '@/router/categories'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Schedule
  },

  ...categories,
  {
    path: '/edit',
    name: 'edit',
    component: Schedule
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
