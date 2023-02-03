import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '../layout/MainLayout.vue'
import ComponentsView from '../views/ComponentsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: LayoutView
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
