import base from './base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例

const user = {
    // 登录
    login(params) {
        return axios.post(`${base.url}/user/login`, params);
    },
    // 注册
    signUp(params) {
        return axios.post(`${base.url}/user/signUp`, params);
    }
}

export default user;