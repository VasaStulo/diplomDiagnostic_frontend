import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage";
import EnterPage from "@/pages/EnterPage";
import UserProfilePage from "@/pages/UserProfilePage";
import DescriptionDiagnosticPage from "@/pages/DescriptionDiagnosticPage";
import SelectionDiagnosticPage from "@/pages/SelectionDiagnosticPage";
import MainDiagnosticPage from "@/pages/MainDiagnosticPage";
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/profile',
    name: 'UserProfilePage',
    component: UserProfilePage
  },
  {
    path: '/diagnostic-preview',
    name: 'DescriptionDiagnosticPage',
    component: DescriptionDiagnosticPage
  },
  {
    path: '/diagnostic/selection',
    name: 'SelectionDiagnosticPage',
    component: SelectionDiagnosticPage,
  },
  {
    path: '/diagnostic/:type',
    component: MainDiagnosticPage,
  },
  {
    path: '/:type',
    name: 'EnterPage',
    component: EnterPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next)=>{
  const isAuth = store.getters['isAuth'];
  if(!['/', '/registration', '/login'].includes(to.path) && !isAuth){
    return next('/login');
  }
  if(isAuth && ['/registration', '/login'].includes(to.path)){
    return next('/profile');
  }

  return next();
})


export default router
