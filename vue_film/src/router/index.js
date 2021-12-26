import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/The_Matrix_Resurrections_FULL_MOVIE_HD_(2021)',
    name: 'Film',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/film.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
