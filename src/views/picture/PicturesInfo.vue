<template>
<div>
    <div style="height:50.4px">
            <Header style="background:rgba(100, 88, 98, 0.5);"></Header>
    </div>
    <SideBar></SideBar>

    <div style="height:20px"></div>
    
    <div style="padding: 0 2rem 0 2rem">
        <div style="display:inline-block">
            <h2>Pic NO.1</h2><p>by xxx</p>
        </div>
        <el-tag style="float:right" id="pic_tag">标签一</el-tag>
        <el-tag style="float:right" id="pic_tag">标签二</el-tag>
        <center>
        <el-image
        style="height:auto;width:auto;
        padding: 0 2rem 0 2rem;"
        :src="url"
        :fit="cover">
        </el-image>
        </center>
        <div>
        <p style="display:inline-block;">上传于 2020-7-6 1:57</p><p style="display:inline-block;float:right">0赞 0浏览 0评论</p>
        </div>
        <div>
            <div style="height:20px"></div>
            ——<p>世界上只有一种英雄主义</p>
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
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            List: ['666', '666', '666', '666', '666', '666', '666', '666'],
        }
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