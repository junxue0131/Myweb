import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state = {
    //用户数据
    Uid: -1,
    name: '',
    token: '',
    //网络请求数据
    url: 'http://localhost:8081/',
}



export default new Vuex.Store({
    state,
});