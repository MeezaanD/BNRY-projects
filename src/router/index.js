import { createRouter, createWebHistory } from 'vue-router'
import SubscribeView from '../views/SubscribeView.vue'

const routes = [
  {
    path: '/',
    name: 'subscribe',
    component: SubscribeView
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/LandingPageView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
