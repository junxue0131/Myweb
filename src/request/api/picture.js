import base from './base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const picture = {    
    // 批量获取图片
    getPic(params) {
        return axios.post(`${base.url}/picture/getPic`, params);
    },
    // 获取图片总数
    total() {
        return axios.get(`${base.url}/picture/total`);
    },
    // 上传图片
    upload(params) {
        return axios.post(`${base.url}/picture/upload`, params);
    },
    // 获取图片详情
    getPicInfo(id) {
        return axios.get(`${base.url}/picture/getPic/${id}`);
    },
    // 点赞图片
    like(params) {
        return axios.post(`${base.url}/picture/likePic`, params);
    },
    // 浏览图片
    view(id) {
        return axios.get(`${base.url}/picture/viewPic/${id}`);
    },
    // 举报图片
    report(params) {
        return axios.post(`${base.url}/picture/report`, params);
    },
    // 获取指定图片的评论
    getComment(id) {
        return axios.get(`${base.url}/picture/getComment/${id}`);    
    },
    // 图片评论提交    
    comment (params) {        
        return axios.post(`${base.url}/picture/comment`, params);
    }
    // 其他接口…………
}

export default picture;