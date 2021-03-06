/*
 * @Author: your name
 * @Date: 2020-11-11 21:41:57
 * @LastEditTime: 2020-12-03 23:47:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \响应式布局d:\practise\projectVue\vue-web_ui\src\router\index.js
 */
// 引入vue
import Vue from 'vue'
// 引入路由vue-router
import VueRouter from 'vue-router'
// 把路由安装到vue上面
Vue.use(VueRouter)
const routes = [
  {
    path: '/menu',// 访问的地址
    name: 'Menu',
    component: () => import('../views/Menu')// 页面的路径
  },
  {
    path: '/login',// 访问的地址
    name: 'Login',
    component: () => import('../views/Login')// 页面的路径
  },
  {
    path: '/home',// 访问的地址
    name: 'Home',
    component: () => import('../views/Home')// 页面的路径
  },
  {
    path: '/about',// 访问的地址
    name: 'About',
    component: () => import('@/views/About')// 页面的路径
  },
  {
    path: '/403',// 访问的地址
    name: '403',
    component: () => import('@/views/exception/403')// 页面的路径
  },
  {
    path: '/404',// 访问的地址
    name: '404',
    component: () => import('@/views/exception/404')// 页面的路径
  },
  {
    path: '/500',// 访问的地址
    name: '500',
    component: () => import('@/views/exception/500')// 页面的路径
  }
]
const router = new VueRouter({
  routes// routes: routes 的简写
})

export default router
