<template>
<div>
    <img id="title" src="../../../assets/images/news/新闻title.gif"/>
    

    <div>
        <el-link type="primary" style="margin: 1rem 0;" @click="drawer = true">全部文章分类索引</el-link>
        <el-drawer
        :title="title"
        :visible.sync="drawer"
        :direction="direction"
        size="50%">
          <IndexBoard></IndexBoard>
        </el-drawer>

        <p style="">最新文章</p>    
        <el-divider></el-divider>
        <center>
        <span v-for="(item, index) in articleList" :key="index">
            
            <el-card class="box-card article_card">
                <!-- <div slot="header">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                </div> -->
                <el-row>
                        <el-col :span="8">
                            <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            </el-image>
                        </el-col>
                        <!-- <el-col :span="1"></el-col> -->
                        <el-col :span="15" :offset="1">
                            <p>{{item.title}}</p>
                            <p>{{item.content}}</p>
                        </el-col>
                </el-row>
                <!-- <div slot="header" class="clearfix">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                </div> -->
            </el-card>
            
            
        </span>
        </center>
    </div>

    <div style="height:20px"></div>
    
    <center>
    <div class="block">
        <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
    </div>
    </center>

    <div style="height:20px"></div>
</div>
</template>

<script>
import IndexBoard from '../../../components/article/IndexBoard'
export default {
     components: {
       IndexBoard
     },
     data() {
        return {
            //下拉弹窗
            drawer: false,
            direction: 'ttb',
            title: '所有新闻文章索引',
            //其他
            activeName: 'index',
            articleList: [
                // {
                //     title: 'hhh1',
                //     content: '哈哈哈哈哈这是一篇文章内容啦啦啦啦啦啦阿文滴滴答答滴滴答答滴滴答答滴滴答答',
                //     view: 20,
                //     tag: 'test'
                // },
            ]
        }
    },
    methods: {
        getNews() {
            let formData = new FormData();
            formData.append('count', 18);
            formData.append('page', 1);
            formData.append('category', 'News');
            this.$axios.post(this.$store.state.url+'article/getArticle', formData).then(res => {
                if (res.data.code === 0) {
                    console.log(res);
                    this.articleList = res.data.data;
                }
            })
        }
    },
    created: function() {
        this.getNews();
    }
}
</script>

<style>
#title {
  height:6rem;
}
/* @media screen and (min-width: 320px) and (max-width: 1156px){
		#title {
      height:4rem;
    }
}

@media screen and (min-width: 1156px) {
		#title {

    }		
} */

</style>