<template>
<div>
    <div id="navButton" style="z-index:100;">
			<a class="toggle" @click="drawer = true"></a>
		</div>

		<el-drawer
  		:visible.sync="drawer"
  		:direction="direction"
		:show-close="false"
		:withHeader="false"
        :size="'30'">
		<el-menu style="padding: 1rem 0 0 0;">
            <a href="/"><el-menu-item index="1" id="menu_item">主页</el-menu-item></a>
			<a href="/picIndex"><el-menu-item index="1" id="menu_item">图片墙</el-menu-item></a>
			<el-menu-item index="2" id="menu_item">自强新闻</el-menu-item>
			<el-menu-item index="3" id="menu_item">资源聚合</el-menu-item>
			<el-menu-item index="4" id="menu_item">关于我们</el-menu-item>
		</el-menu>
		</el-drawer>
</div>
</template>



<script>
export default {
    data() {
        return {
            //侧边栏
            drawer: false,
            direction: 'ttb',
        }
    }
}
</script>

<style src="../assets/css/main.css" scoped></style>

<style>
#navButton {
	-moz-backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
	-ms-backface-visibility: hidden;
	backface-visibility: hidden;
	-moz-transition: -moz-transform 0.5s ease;
	-webkit-transition: -webkit-transform 0.5s ease;
	-ms-transition: -ms-transform 0.5s ease;
	transition: transform 0.5s ease;
	display: block;
	height: 60px;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
}

#menu_item {
	height: 40px;
	padding: 3px 20px 0 0;
}
</style>