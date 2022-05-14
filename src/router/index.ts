import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountriesView from '@/views/CountriesView.vue'
import FaqView from '@/views/FaqView.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
  {
    path: '/countries',
    name: 'countries',
    component: CountriesView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
