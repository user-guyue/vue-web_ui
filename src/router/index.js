// 引入vue
import Vue from 'vue'
// 引入路由vue-router
import VueRouter from 'vue-router'
// 把路由安装到vue上面
Vue.use(VueRouter)
const routes = [
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
  }
]
const router = new VueRouter({
  routes// routes: routes 的简写
})
export default router
