
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Greetings.vue') },
      { path: '/game-1', component: () => import('pages/Game 1.vue') },
      { path: '/game-2', component: () => import('pages/Game 2.vue') },
      { path: '/game-3', component: () => import('pages/Game 3.vue') },
      { path: '/chat', component: () => import('pages/Chat.vue') },
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
