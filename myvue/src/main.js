// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'

import './assets/css/main.css' /*引入公共样式*/
import './assets/css/noscript.css' /*引入公共样式*/
// import "./assets/js/jquery.min.js"
// import "./assets/js/jquery.dropotron.min.js"
// import "./assets/js/jquery.scrolly.min.js"
// import "./assets/js/jquery.scrollex.min.js"
// import "./assets/js/browser.min.js"
// import "./assets/js/breakpoints.min.js"
// import "./assets/js/util.js"
// import "./assets/js/main_t.js"


Vue.config.productionTip = false

//使用组件
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 启用 ElementUI
  render: h => h(App)
})
