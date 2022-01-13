import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Query from '../views/Query.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
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
    path: '/query',
    name: 'Query',
    component: Query,
  },
  {
    path: '/params',
    name: 'Params',
    component: () => import('../views/Params.vue'),
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
