import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'default' },
    component: HomeView
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Personal.vue')
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
