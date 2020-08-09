import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const state = {
    //用户数据
    Uid: -1,
    name: '',
    token: '',
    userInfo: {},
    //网络请求数据
    url: 'http://localhost:8081/',
}


const getDefaultState = () => {
    return  {
        //用户数据
        Uid: -1,
        name: '',
        token: '',
        userInfo: {},
        //网络请求数据
        url: 'http://localhost:8081/',
    }
}

const mutations = {
    resetState (state) {
        Object.assign(state, getDefaultState())
    }
}



export default new Vuex.Store({
    state,
    mutations
});