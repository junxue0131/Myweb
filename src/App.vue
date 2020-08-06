<template>
    <div id="app">
        <router-view  v-if="isRouterAlive"/>
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
    }
}


</script>
