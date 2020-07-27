<template>
<div>
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>

    <div>
        <p>公告</p>
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
        <center>
        <el-link type="primary" style="margin: 1rem 0;">查看更多</el-link>
        </center>
    </div>


    <div>
        <p>新闻</p>
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
                            <h4>{{item.title}}</h4>
                            <p>{{item.content}}</p>
                        </el-col>
                </el-row>
                <!-- <div slot="header" class="clearfix">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                </div> -->
            </el-card>
            
            
        </span>
        </center>
        <center>
        <el-link type="primary" style="margin: 1rem 0;">查看更多</el-link>
        </center>
    </div>


     <div>
        <p>百科</p>
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
        <center>
        <el-link type="primary" style="margin: 1rem 0;">查看更多</el-link>
        </center>
    </div>


    
    <!-- <center>
    <div class="block">
        <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
    </div>
    </center> -->
</div>
</template>

<script>
export default {
     data() {
        return {
            activeName: 'index',
            articleList: [
                // {
                //     title: 'hhh1',
                //     content: '哈哈哈哈哈这是一篇文章内容啦啦啦啦啦啦阿文滴滴答答滴滴答答滴滴答答滴滴答答',
                //     view: 20,
                //     tag: 'test'
                // },
                // {
                //     title: 'hhh1',
                //     content: '哈哈哈哈哈这是一篇文章内容',
                //     view: 20,
                //     tag: 'test'
                // },
                // {
                //     title: 'hhh1',
                //     content: '哈哈哈哈哈这是一篇文章内容',
                //     view: 20,
                //     tag: 'test'
                // },
                // {
                //     title: 'hhh1',
                //     content: '哈哈哈哈哈这是一篇文章内容',
                //     view: 20,
                //     tag: 'test'
                // },   
            ]
        }
    },
    methods: {
        getLastestArticle() {
            let formData = new FormData();
            formData.append('count', 18);
            formData.append('page', 1);
            this.$axios.post(this.$store.state.url+'article/getArticle', formData).then(res => {
                if (res.data.code === 0) {
                    console.log(res);
                    this.articleList = res.data.data;
                }
            })
            // this.articleList = 
        }
    },
    created: function() {
        this.getLastestArticle();
    }
}
</script>

<style>

</style>