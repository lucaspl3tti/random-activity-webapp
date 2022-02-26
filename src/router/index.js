import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start-game',
      component: () => import('../views/StartGame.vue')
    },
    {
      path: '/start',
      name: 'add-players',
      component: () => import('../views/AddPlayers.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/Activity.vue')
    },
  ]
})

export default router
