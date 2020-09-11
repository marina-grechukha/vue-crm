import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty-layout' },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: { layout: 'empty-layout' },
    component: () => import('../views/Registration.vue'),
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Categories.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Detail.vue'),
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'main-layout' },
    component: () => import('../views/History.vue'),
  },
  {
    path: '/plan',
    name: 'Plan',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Plan.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/record',
    name: 'Record',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Record.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
