/*
 * @Author: your name
 * @Date: 2020-11-11 21:41:56
 * @LastEditTime: 2020-11-11 22:39:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import { Button } from 'ant-design-vue';
Vue.use(Antdv);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
