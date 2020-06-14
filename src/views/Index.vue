<template>
    <el-container>
        <!-- header -->
        <header id="header" class="alt" style="position: fixed;background: rgba(100, 88, 98, 0.2);">
					<h1 id="logo"><a href="index.html">Xuejun</a></h1>
					<nav id="nav">
						<ul>
							<li class="current"><a href="index.html">首页</a></li>
							<li class="current"><a href="index.html">文章</a></li>
							<li class="current"><a href="index.html">个人介绍</a></li>
							<li class="current"><a href="index.html">实验室
								<el-dropdown>
									<span class="el-dropdown-link">
										<i class="el-icon-arrow-down el-icon--right"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item >Mybatis演示</el-dropdown-item>
										<el-dropdown-item >Springboot演示</el-dropdown-item>
									</el-dropdown-menu>
									</el-dropdown>
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
					</div>
				</section>
        <el-header>
            
        </el-header>
        
	
		<center><h2><strong>Some pictures</strong></h2></center>
  		<List></List>

		<Upload></Upload>
		
        
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

export default {
	name: "index",
	components: {
		List,
		Upload
	},
    data() {
      return {
        url: 'https://s1.ax1x.com/2020/06/06/tyibYn.png'
      }
    }
}
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #ffffff;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    margin-bottom: 20px;
  }

</style>

<style>


html,body{overflow:hidden;overflow-y:auto;}
.selector::-webkit-scrollbar { display: none }


</style>