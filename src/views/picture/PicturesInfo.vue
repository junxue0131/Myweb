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

        
        <div id="out">
        <div id="control">
            <el-button type="primary" class="item" @click="show=true;reply=-1">发表评论</el-button>
            <template v-if="isReported">
                <el-button type="danger" class="item" @click="showReport = true">举报</el-button>
            </template>
            <template v-else>
                <el-button type="danger" class="item" disabled="">已举报</el-button>
            </template>
            
            <i class="iconfont zan" :class="state" @click="like()"></i>
            
        </div>
        </div>
            


        <h3 style="display:inline-block;">评论</h3>
        
        

        <!-- 评论对话框 -->
        <van-dialog v-model="show" title="评论" :showCancelButton=true :showConfirmButton=false>
        <center><p v-if="reply !== -1">回复:{{replyName}}</p></center>
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
                    <el-link type="primary" @click="show=true;replyName=comment.fromName;reply=comment.fromUid">回复</el-link>
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
import VueStar from 'vue-star'

// 全局注册
Vue.use(Dialog);
export default {
    components: {
        Header,
        Footer,
        SideBar,
        VueStar
    },
    data() {
        return {
            id: this.$route.params.id,
            info: {},
            url: '',
            List: [],
            //评论表单
            show: false,
            reply: -1,
            replyName: '',
            content: '',
            dialogImageUrl: '',
            dialogVisible: false,
            //
            showReport: false,
            reason: '',
            isReported: false,
            //赞图标状态
            state: 'icon-zan1',
            t: true
        }
    },
    methods: {
        getInfo() {
            this.$api.picture.getPicInfo(this.id).then(res => {
                // console.log(res.data.data);
                this.info = res.data.data;
                this.url = 'http://'+this.info.picUrl;
                this.isReport();
                this.isLike();
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
                // console.log(res.data.data);
                if (res.data.code === 0) {
                    this.$message.success('评论成功!');
                } else {
                    this.$message.error(res.data.msg);
                }
                this.show = false;
            })

            if (this.$store.state.Uid === -1) {
                return;
            }
            
            formData.append('createTime', moment(new Date()).format('YYYY-MM-DD'));
            formData.append('toName', this.replyName);
            formData.append('fromName', this.$store.state.name);
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
                // console.log(res.data.data);
                if (res.data.code === 0) {
                    this.$message.success('举报成功!');
                    this.isReported = false;    
                } else {
                    this.$message.error(res.data.msg);
                }
                //举报接口完成后，重新请求一遍用户信息接口获取持久化信息
                this.$api.user.getInfo().then(res => {
                    this.$store.state.userInfo = res.data.data;
                });
            })
        },
        isReport: function() {
            if (this.$store.state.Uid === -1) {
                this.isReported = true;
                return;
            }
            for (let i = 0; i < this.$store.state.userInfo.report.length; i++) {
                // console.log(this.$store.state.userInfo.report[i].picId)
                if (this.$store.state.userInfo.report[i].picId == this.id) {
                    this.isReported = false;
                    return;
                }
            }
            this.isReported = true;
        },
        isLike: function() {
            console.log('hhh');
            if (this.$store.state.Uid === -1) {
                this.state = 'icon-zan1';
                return;
            }
            for (let i = 0; i < this.$store.state.userInfo.like.length; i++) {
                // console.log(this.$store.state.userInfo.like[i].picId)
                if (this.$store.state.userInfo.like[i].picId == this.id) {
                    this.state = 'icon-zan';
                    return;
                }
            }
            this.state = 'icon-zan1';
        },
        like() {
            if (this.state === 'icon-zan1') {
                this.state = 'icon-zan';
            }
            else {
                this.state = 'icon-zan1';
            }
            this.$api.picture.like(this.id).then(res => {
                if (res.data.code !== 0) {
                    this.$message.error(res.data.msg);
                }
                //点赞完成后，重新请求一遍用户信息接口获取持久化信息
                this.$api.user.getInfo().then(res => {
                    this.$store.state.userInfo = res.data.data;
                    console.log(this.$store.state.userInfo);
                });
            });
        }
    },
    created: function() {
        this.getInfo();
        this.getComment();
        console.log(this.$store.state.userInfo);
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


@media screen and (min-width: 360px){
    #control {
        float: right;
        display:inline-block;
    }
    
	.item {
        float: right;
        margin: 1rem;
    }

    .zan {
        margin: 0rem 1rem 0 0;
        font-size: 40px;
        float:right;
    }
}

@media screen and (max-width: 360px) {
    #out {
        width: 100%;    
        height: 70px;
    }


    #control {
        float: none;
    }

	.item {
        margin: 1rem 0.5rem 1rem 0.5rem;
    }

    .zan {
        margin: 0.6rem 1rem 0 0;
        height: 30px;
        font-size: 40px;
        float:right;
    }
}

.zan:active {
    transform: scale(1.5);
}



</style>