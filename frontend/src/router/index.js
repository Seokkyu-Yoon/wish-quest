import { createRouter, createWebHistory } from 'vue-router'

import Main from '../view/Main.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
})