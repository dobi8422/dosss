import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/:catchAll(.*)', redirect: '/' },
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/works', name: 'Works', component: () => import('./views/Works.vue') },
  { path: '/posts', name: 'Posts', component: () => import('./views/Posts.vue') },
  { path: '/all_posts', name: 'AllPosts', component: () => import('./views/AllPosts.vue') }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router
