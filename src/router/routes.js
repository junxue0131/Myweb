import Vue from 'vue'
import VueRouter from 'vue-router'

import FrameWork from '../components/FrameWork.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter);


const routers = [
    {
      path: '/',
      component: Index,
//   　　 children: [ 
//   　　　{ 
//   　　　　path: '/', 
//    　　　 component: Login 
//   　　  }
//   　　]
    },
    {
      path: '/test',
      component: FrameWork,
    //   children: [
    //     {
    //       path: '/',
    //       name: 'login',
    //       component: Login
    //     },
    //     {
    //       path: 'first',
    //       name: 'first',
    //       component: First
    //     } 
    //   ]
    },
    // {
    //     path: '/',
    //     redirect: '/index'
    // }
]
  
export default routers
