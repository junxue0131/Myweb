<template>
<div>
<div id="content">

    
    <Header></Header>
    

    <center>
    <div>
        <el-tabs :stretch="true">
            <el-tab-pane label="首页" name="first"></el-tab-pane>
            <el-tab-pane label="新闻" name="second"></el-tab-pane>
            <el-tab-pane label="百科" name="third"></el-tab-pane>
            <el-tab-pane label="活动" name="fourth"></el-tab-pane>
        </el-tabs>
    </div>
    </center>

    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>

    <p>公告</p>
    <el-divider></el-divider>
    <div v-for="(item, index) in articleList" :key="index">
        <el-card class="box-card article_card">
            <div slot="header">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            </div>
            <el-row>
                    <el-col :span="8">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
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
    </div>
    <el-link type="primary">查看更多</el-link>
    
    <center>
    <div class="block">
        <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
    </div>
    </center>

  
</div>
<Footer></Footer>
</div>
</template>

<script>
import Header from '../../components/UserHeader'
import Footer from '../../components/Footer'
import SideBar from '../../components/Sidebar'
export default {
    components: {
        Header,
        SideBar,
        Footer
    },
    data() {
        return {
            articleList: [
                {
                    title: 'hhh1'
                },
                {
                    title: 'hhh1'
                },
                {
                    title: 'hhh1'
                },
            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>




@media screen and (min-width: 320px) and (max-width: 1156px){
				
	#content {
        margin: 0 1rem;
    }
    
    .article_card {
        margin:1rem 0rem;
    }
}

@media screen and (min-width: 1156px) {
				
	#content {
        margin: 0 3rem;
    }
    
    .article_card {
        margin: 1rem 2rem;
    }
}

html {
    overflow: -moz-hidden-unscrollable;
    height: 100%;
}

body::-webkit-scrollbar {
    max-width: 100%;
	display: none;
	overflow-x:hidden;
}

.el-tabs__nav-wrap.is-scrollable {
    width: 100%;
}

.el-tabs__active-bar {
    display: none;
}

.el-tabs__nav-wrap {
    width: 100%;
}

.el-tabs__nav-wrap::after {
    display: none;
}

/* .el-tabs__nav {
    float: none;
} */

.el-card__header {
    padding: 0 0 0 0;
    height: 3rem;
    width: auto;
}

.el-card__body {
    padding: 0.5rem;
}

</style>

轮播图
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

卡片
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: auto;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>