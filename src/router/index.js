import Vue from 'vue'
import VueRouter from 'vue-router'
import Schedule from '@/components/Schedule'
import categories from '@/router/categories'
import User from '@/views/User'
import UserProfile from '@/views/UserProfile'
import UserPosts from '@/views/UserPosts'

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
    path: '/user/:id',
    component: User,
    children: [
      {
        // при совпадении пути с шаблоном /user/:id/profile
        // в <router-view> компонента User будет показан UserProfile
        path: 'profile',
        component: UserProfile
      },
      {
        // при совпадении пути с шаблоном /user/:id/posts
        // в <router-view> компонента User будет показан UserPosts
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
