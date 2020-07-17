import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import PicturesIndex from '../views/picture/PicturesIndex.vue'
import PicturesInfo from '../views/picture/PicturesInfo.vue'
import Edit from '../views/article/Edit.vue'
import ArticleIndex from '../views/article/Index.vue'

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
    },
    {
      path: '/article',
      component: ArticleIndex,
//       children: [ 
//   　　　{ 
//   　　　　path: 'test', 
// 　　　    component: Login 
//     　　}
//       ]
    },
    {
      path: '/test',
      component: Edit,
    },
]
  
export default routers
