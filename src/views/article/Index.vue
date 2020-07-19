<template>
<div>
<div id="content">

    
    <Header></Header>
    

    <center>
    <div>
        <el-tabs :stretch="true" v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane label="首页" name=""></el-tab-pane>
            <el-tab-pane label="新闻" name="news" @click="console.log('hhh')"></el-tab-pane>
            <el-tab-pane label="百科" name="baike"></el-tab-pane>
            <el-tab-pane label="活动" name="activties"></el-tab-pane>
        </el-tabs>
    </div>
    </center>

    <router-view></router-view>

  
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
            activeName: 'index',
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
        },
        handleTabClick(tab, event) {
            this.$router.push('/article/'+tab.name);
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
        margin:0.3rem 0rem;
        display: inline-block;
        width: 100%;
    }
}

@media screen and (min-width: 1156px) {
				
	#content {
        margin: 0 3rem;
    }
    
    .article_card {
        margin: 0.3rem 1rem;
        display: inline-block;
        width: 45%;
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