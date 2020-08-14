<template>
    <div id="app">
        
    <keep-alive>
        <!-- isRouterAlive -->
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    </div>
</template>

<script>


export default {
    name: 'App',
    provide :function() {
        return {
            reload:this.reload
        }
    },
    data: function() {
        return {
            isRouterAlive:true
        }
    },
    methods: {
            reload: function () {
                this.isRouterAlive=false;
                this.$nextTick(function(){
                this.isRouterAlive=true
            })
        }
    },
    created () {
        //在页面加载时读取sessionStorage里的状态信息
        if (sessionStorage.getItem("store") ) {
            this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
        } 
        //在页面刷新时将vuex里的信息保存到sessionStorage里
        window.addEventListener("beforeunload",()=>{
            sessionStorage.setItem("store",JSON.stringify(this.$store.state))
        })
    }
}


</script>
