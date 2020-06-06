import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.use(VueRouter);
Vue.use(Axios);


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: resolve => require(['../views/index'], resolve),
            meta: {
                title: 'home'
            }
        },
        {
            path: '/ShowText',
            component: resolve => require(['../components/ShowText'], resolve)
        },
        {
            path: '/Robot',
            component: resolve => require(['../components/RobotTest'], resolve)
        }
    ]
});