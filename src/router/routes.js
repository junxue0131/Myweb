import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import PicturesIndex from '../views/PicturesIndex.vue'

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
      path: '/picIndex',
      component: PicturesIndex,
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
