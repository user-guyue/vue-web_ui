/*
 * @Author: your name
 * @Date: 2020-11-11 21:41:56
 * @LastEditTime: 2020-12-03 22:07:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_ui\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antdv from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 国际化文案
import  ConfigProvider  from 'ant-design-vue';
Vue.use(Antdv);
Vue.use(ConfigProvider);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
