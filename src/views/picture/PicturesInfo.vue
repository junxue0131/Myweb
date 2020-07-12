<template>
<div>
    <div style="height:50.4px">
            <Header style="background:rgba(100, 88, 98, 0.5);"></Header>
    </div>
    <SideBar></SideBar>

    
    <div style="height:40px"></div>
    <el-button icon="el-icon-back" circle style="margin: 0 2rem" @click="back()"></el-button>
    
    
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
        <p style="display:inline-block;">上传于 {{info.createTime}}</p><p style="display:inline-block;float:right">{{info.like}}赞 {{info.view}}浏览 null评论</p>
        </div>
        <div>
            <div style="height:20px"></div>
            ——<p>{{info.picInfo}}</p>
            <div style="height:20px"></div>
        </div>

        <h3>评论</h3>
        <div>
            <div v-for="(comment, index) in List" :key="comment.content">
                <div>
                    <el-divider></el-divider>
                    <p>王二麻子</p>
                    <p>666</p>
                    <p>发表于: 2020-7-6 2:06</p>
                    <el-divider></el-divider>
                </div>
            </div>
        </div>
    </div>

    

    <Footer></Footer>
</div>
</template>

<script>
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SideBar from '../../components/Sidebar'
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
            List: ['666', '666', '666', '666', '666', '666', '666', '666'],
        }
    },
    methods: {
        getInfo() {
            this.$axios.get(this.$store.state.url+'picture/getPic/'+this.id).then(res => {
                // console.log(res.data.data);
                this.info = res.data.data;
                this.url = 'http://'+this.info.picUrl;
            })
        },
        back() {
            this.$router.push({path: '/picIndex'});
        }
    },
    created: function() {
        this.getInfo();
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

</style>