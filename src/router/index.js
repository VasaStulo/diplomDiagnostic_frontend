import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage";
import EnterComponent from "@/components/EnterComponent";
import LoginUser from "@/components/LoginUser";
import UserProfilePage from "@/pages/UserProfilePage";
import DescriptionDiagnosticPage from "@/pages/DescriptionDiagnosticPage";
import SelectionDiagnosticPage from "@/pages/SelectionDiagnosticPage";
import MainDiagnosticPage from "@/pages/MainDiagnosticPage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/enter',
    name: 'EnterComponent',
    component: EnterComponent
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
