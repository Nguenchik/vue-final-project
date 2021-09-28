import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@components/HelloWorld'
import VTable from '@components/VTable'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'hello',
    component: HelloWorld
  },
  {
    path: '/table',
    name: 'table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: VTable
  },
  {
    path: '*',
    name: '404',
    component: () => import('@components/404')
  },
  {
    path: 'contract',
    name: 'contract',
    component: () => import('@components/contract')
  },
  {
    path: 'contract?id=id',
    name: 'contract',
    component: () => import('@components/contract')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(next)
  next()
})

router.afterEach((to, from) => {
  console.log('after')
  console.log(to)
  console.log(from)
})

export default router
