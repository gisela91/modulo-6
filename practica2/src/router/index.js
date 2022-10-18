import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Productos',
    name: 'TarjetaView',
    component: () => import(/* webpackChunkName: "TarjetaView" */ '../views/TarjetaView.vue')
  },
  {
  path: "/Productos/:id",
  name: "ProductosView",
  props: true,
  component: () => import(/* webpackChunkName: "ProductosView" */ '../views/ProductosView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
