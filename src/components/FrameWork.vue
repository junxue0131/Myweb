<template>
<div>
    <!-- Header -->
    <div style="height:50.4px">
        <Header></Header>
    </div>
            
    <el-main>
        <div style="height:1000px">
            这是内容
		</div>
    </el-main>
    <!-- Footer -->
        <Footer></Footer>
			
</div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
    components: {
        Header,
		Footer,
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