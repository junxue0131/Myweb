<template>
    <el-container>
        <!-- header -->
        <header id="header" class="alt" style="background: rgba(100, 88, 98, 0);padding: 2em 0em 2em 0em;">
					<h1 id="logo" style="padding: 0em 2em;"><a href="index.html">Xuejun</a></h1>
					<nav id="nav">
						<ul>
							<li class="current"><a href="index.html">首页</a></li>
							<li class="current"><a href="index.html">文章</a></li>
							<li class="current"><a href="index.html">个人介绍</a></li>
							<li class="current test"><a href="#">
								<van-cell border="false" @click="showPopup" 
								style="padding: 0 0 0 0;background: inherit;color: #ffffff; text-align: left;"
								id="test">
									展示弹出层
								</van-cell>
        						<van-popup v-model="show"  position="left" :style="{ height: '100%', width: '30%' }">
									<Upload></Upload>
									<Upload></Upload>
									<Upload></Upload>
            						<van-cell title="文本" />
								</van-popup>
							</a></li>
						</ul>
					</nav>
		</header>

        <!-- Banner -->
				<section id="banner">
					<!--
						".inner" is set up as an inline-block so it automatically expands
						in both directions to fit whatever's inside it. This means it won't
						automatically wrap lines, so be sure to use line breaks where
						appropriate (<br />).
					-->
					<div class="inner">
						<header>
							<h2>Xue Jun</h2>
						</header>
						<p>欢迎来到 <strong>我的网站</strong>, 一个无聊
						<br />
						青年所搭的网站
						<br />
						by <a href="http://html5up.net">橙</a>.</p>
                        <br />
                        <br />
                        <br />
                        <p>用来把这个banner拉长233</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
					</div>
				</section>
        <el-header>
            
        </el-header>
        
	
		<center><h2><strong>Some pictures</strong></h2></center>
  		<List></List>
		
        
        <!-- Footer -->
		<footer id="footer">
			<ul class="icons">
				<li><a href="#" class="icon brands circle fa-twitter"><span class="label">Twitter</span></a></li>
				<li><a href="#" class="icon brands circle fa-facebook-f"><span class="label">Facebook</span></a></li>
				<li><a href="#" class="icon brands circle fa-google-plus-g"><span class="label">Google+</span></a></li>
				<li><a href="#" class="icon brands circle fa-github"><span class="label">Github</span></a></li>
				<li><a href="#" class="icon brands circle fa-dribbble"><span class="label">Dribbble</span></a></li>
			</ul>
			<ul class="copyright">
				<li>&copy; XueJun</li><li>Designed: <a href="http://html5up.net">HTML5 UP</a></li>
			</ul>
		</footer>
        
    </el-container>
</template>

<script>
import List from '../components/List'
import Upload from '../components/Upload'
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);

export default {
	name: "index",
	components: {
		List,
		Upload
	},
    data() {
      return {
		url: 'https://s1.ax1x.com/2020/06/06/tyibYn.png',
		show: false
      }
	},
	methods: {
		showPopup() {
            this.show = true;
        }
	}
}
</script>

<style src="../assets/css/main.css" scoped>
</style>

<style>
.van-cell::after {
	position: fixed;
}

#test > .van-cell__value--alone {
	color: #ffffff;
}

html {
    overflow: -moz-hidden-unscrollable;
    height: 100%;
}

body::-webkit-scrollbar {
    display: none;
}

</style>