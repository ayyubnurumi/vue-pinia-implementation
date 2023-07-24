import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/step1',
      name: 'step1',
      component: () => import('../views/Step1.vue')
    },
    {
      path: '/step2',
      name: 'step2',
      component: () => import('../views/Step2.vue')
    },
    {
      path: '/step3',
      name: 'step3',
      component: () => import('../views/Step3.vue')
    },
  ]
})

export default router
