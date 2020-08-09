<template>
<div>
    
    <div style="padding: 0 2rem 0 2rem">
        <Header></Header>
    </div>
    
    <SideBar></SideBar>

    <div style="height:20px"></div>
    <el-page-header @back="back()" content="图片详情" style="margin: 0 2rem">
    </el-page-header>
    
    <!-- <el-button icon="el-icon-back" circle style="margin: 0 2rem" @click="back()"></el-button> -->
    
    
    <div style="padding: 0 2rem 0 2rem">
        
        <div style="display:inline-block">
            <h2>Pic NO.{{ id }}</h2><p>by {{ info.ownerId }}</p>
        </div>
        <el-tag style="float:right" id="pic_tag">{{info.picKind}}</el-tag>
        <center>
        <el-image
        style="padding: 0 2rem 0 2rem;height:40rem"
        :src="url"
        fit="contain"
        >
        </el-image>
        </center>
        <div>
        <p style="display:inline-block;">上传于 {{info.createTime}}</p><p style="display:inline-block;float:right">{{info.like}}赞 {{info.view}}浏览 {{List.length}}评论</p>
        </div>
        <div>
            <div style="height:20px"></div>
            ————<p>{{info.picInfo}}</p>
            <div style="height:20px"></div>
        </div>

        <h3 style="display:inline-block;">评论</h3>
        <el-button type="primary" style="float:right;margin: 1em 0 1em 0;" @click="show=true;reply=-1">发表评论</el-button>
        <el-button type="danger" style="float:right;margin: 1em 1rem 1em 0;" @click="showReport = true">举报</el-button>

        <!-- 评论对话框 -->
        <van-dialog v-model="show" title="评论" :showCancelButton=true :showConfirmButton=false>
        <center><p v-if="reply !== -1">回复:{{reply}}</p></center>
        <van-form @submit="comment()">
            <van-divider>自强Studio技术中心</van-divider>
            <van-field name="uploader">
            <template #input>
                <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入内容"
                v-model="content">
                </el-input>
            </template>
            </van-field>
            
            <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
                提交
            </van-button>
            </div>
        </van-form>
        </van-dialog>

        <h3 v-if="this.List.length === 0">当前暂无评论</h3>

        <div>
            <div v-for="(comment, index) in List" :key="index">
                <div>
                    <el-divider></el-divider>
                    <p>{{comment.fromName}}</p>
                    <p v-if="comment.toUid !== -1 && comment.toUid !== '-1'">
                        回复：@{{comment.toName}}
                    </p>
                    <p>{{comment.content}}</p>
                    <p>发表于: {{comment.createTime}}</p>
                    <el-link type="primary" @click="show=true;reply=comment.fromName">回复</el-link>
                    <el-divider></el-divider>
                </div>
            </div>
        </div>
    </div>

    <van-dialog v-model="showReport" title="举报图片" show-cancel-button @confirm="report(reason)">
        <van-form>
         <van-field name="uploader">
            <template #input>
                <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入理由"
                v-model="reason">
                </el-input>
            </template>
            </van-field>
        </van-form>
    </van-dialog>

    

    <Footer></Footer>
</div>
</template>

<script>
import Footer from '../../components/Footer'
import Header from '../../components/UserHeader'
import SideBar from '../../components/Sidebar'
import moment from 'moment';
import Vue from 'vue';
import { Dialog } from 'vant';

// 全局注册
Vue.use(Dialog);
export default {
    components: {
        Header,
        Footer,
        SideBar
    },
    data() {
        return {
            id: this.$route.params.id,
            info: {},
            url: '',
            List: [],
            //评论表单
            show: false,
            reply: false,
            content: '',
            dialogImageUrl: '',
            dialogVisible: false,
            //
            showReport: false,
            reason: ''
        }
    },
    methods: {
        getInfo() {
            this.$api.picture.getPicInfo(this.id).then(res => {
                // console.log(res.data.data);
                this.info = res.data.data;
                this.url = 'http://'+this.info.picUrl;
            })
        },
        back() {
            this.$router.push({path: '/picIndex'});
        },
        getComment() {
            this.$api.picture.getComment(this.id).then(res => {
                console.log(res.data.data);
                this.List = res.data.data;
            })
        },
        comment() {
            let formData = new FormData()

            formData.append('content', this.content);
            formData.append('fromUid', this.$store.state.Uid);
            formData.append('picId', this.id);
            formData.append('toUid', this.reply);

            let config = {headers: {'Content-Type': 'multipart/form-data'}};

            this.$api.picture.comment(formData).then(res => {
                console.log(res.data.data);
                if (res.data.code === 0) {
                    this.$message.success('评论成功!');
                } else {
                    this.$message.error(res.data.msg);
                }
                this.show = false;
            })
            
            formData.append('createTime', moment(new Date()).format('YYYY-MM-DD'));
            var objData = {};
            formData.forEach((value, key) => objData[key] = value);

            this.List.push(objData);
        },
        //举报
        report(reason) {
            let formData = new FormData()
            formData.append('picId', this.id);
            formData.append('Uid', this.$store.state.Uid);
            formData.append('reason', reason);
            this.$api.picture.report(formData).then(res => {
                console.log(res.data.data);
                if (res.data.code === 0) {
                    this.$message.success('举报成功!');
                } else {
                    this.$message.error('举报失败!');
                }
            })
        }
    },
    created: function() {
        this.getInfo();
        this.getComment();
        this.$router.beforeEach((to, from, next) => {
            window.scrollTo(0, 0);
            next()
        });
    }
}
</script>

<style>


html {
    overflow: -moz-hidden-unscrollable;
    height: 100%;
}

body::-webkit-scrollbar {
    max-width: 100%;
	display: none;
	overflow-x:hidden;
}

#pic_tag {
    float: right;
    margin: 1.2rem 0.5rem 0 0;
}

.el-message--success {
  z-index: 3000 !important;
}

.el-message--error {
  z-index: 3000 !important;
}

</style>