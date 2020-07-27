// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

import routers from './router/routes'
import App from './App'
import Vuex from 'vuex'
import store from './store'


import '@vant/touch-emulator';



Vue.config.productionTip = false

//使用组件
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex)
Vue.prototype.$axios = axios;


const router = new VueRouter({
  mode: 'history',
  routes: routers
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // 启用 ElementUI
  render: h => h(App)
})
