import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'classify',
        name: 'classify',
        component: () => import('@/views/classify.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/cart.vue'),
      },
      {
        path: 'me',
        name: 'me',
        component: () => import('@/views/me.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
