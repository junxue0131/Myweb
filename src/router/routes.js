import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import PicturesIndex from '../views/picture/PicturesIndex.vue'
import PicturesInfo from '../views/picture/PicturesInfo.vue'

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
    },
    {
        path: '/picInfo/:id',
        component: PicturesInfo,
    }
]
  
export default routers