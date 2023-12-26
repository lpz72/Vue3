import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import RegisterView from '../views/RegisterView.vue'
import UserListView from '../views/UserListView.vue'
import UserProfileView from '../views/UserProfileView.vue'

//增加六个路由
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/userlist/',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfileView
  },
  {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/:catchAll(.*)/',  //利用正则表达式来匹配任意不存在地址
    redirect: '/404/', //然后跳转到404，重定向
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
