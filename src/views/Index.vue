<template>
    <div>
        <!-- header -->
        <header id="header" class="alt" style="background: rgba(100, 88, 98, 0);padding: 2em 0em 2em 0em;">
					<h1 id="logo" style="padding: 0em 2em;"><a href="index.html" style="font-size=20px">ZQHOME</a></h1>
					<nav id="nav">
						<ul>
							<li class="current"><a href="index.html">首页</a></li>
							<li class="current"><a href="index.html">图片墙</a></li>
							<li class="current"><a href="index.html">资源聚合</a></li>
							<li class="current"><a href="index.html">关于我们</a></li>
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
							<h2>ZQ HOME</h2>
						</header>
						<br />
						<h3>你好，武大人</h3>
						<h3>欢迎来到 <strong>自强主站</strong></h3>
						<h3>本站希望为每个同学创造</h3>
						<h3>便利与感动</h3>
                        <br />
                        <br />
                        <br />
						<br />
                        <br />
                        <br />
                        <br />
						<br>by <a href="http://html5up.net">ZiqiangStudio</a>.</p>
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
        
    </div>
</template>

<script>
import List from '../components/List'
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);

export default {
	name: "index",
	components: {
		List,
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
	overflow-x:hidden;
}

#banner {   
    
} 
</style>