import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../views/components/use-button.vue')
  },
  {
    path: '/border',
    name: 'border',
    component: () => import('../views/components/use-border.vue')
  },
  {
    path: '/emit',
    name: 'emit',
    component: () => import('../views/components/use-emit-parent.vue')
  },
  {
    path: '/gantt',
    name: 'gantt',
    component: () => import('../views/components/gantt.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
