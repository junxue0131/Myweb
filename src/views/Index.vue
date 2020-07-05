<template>
    <div>
        <!-- header -->
        <Header></Header>

		<!-- //侧边栏 -->
		<SideBar></SideBar>
		

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
						<br>by <a href="http://ziqiang.net.cn">ZiqiangStudio</a>
                        <br />
                        <br />
                        <br />
					</div>
				</section>
        
  		<List></List>
		
        
        <!-- Footer -->
		<Footer></Footer>
        
    </div>
</template>

<script>
import List from '../components/picture/List'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);

export default {
	name: "index",
	components: {
		List,
		Header,
		Footer,
		SideBar,
	},
    data() {
      return {
		url: 'https://s1.ax1x.com/2020/06/06/tyibYn.png',
		show: false,
      }
	},
	methods: {
		showPopup() {
            this.show = true;
        }
	}
}
</script>

<style src="../assets/css/main.css" scoped></style>

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


</style>