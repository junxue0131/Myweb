<template>
    <div>
        <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
        <!-- Header -->
        <div style="height:50.4px">
            <Header style="background:rgba(100, 88, 98, 0.5);"></Header>
        </div>

        <SideBar></SideBar>
                
        <el-main style="padding: 0 0 0 0;">
            <List></List>
        </el-main>

        <!-- Footer -->
        <Footer></Footer>
                
    </div>
</template>

<script>
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SideBar from '../../components/Sidebar'
import List from '../../components/picture/List'
export default {
    components: {
        Header,
        Footer,
        List,
        SideBar
    },
    data() {
        return {
        activeIndex: '1',
        activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
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



</style>