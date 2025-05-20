import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue' 
import { createPinia } from 'pinia' 
import { createApp } from 'vue' 
import App from '../App.vue' 
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '',      name: 'home',    component: () => import('../views/HomeView.vue') },
      { path: 'about', name: 'about',   component: () => import('../views/AboutView.vue') },
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
