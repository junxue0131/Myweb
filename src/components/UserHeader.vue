<template>
<div>
        
        <div style="display:inline-block;">
            <img style="height:3rem;width:3rem;margin:1rem 0" src="../assets/自强.jpg"/>
        </div>
        
        <div style="float:right">
            <i class="el-icon-search" id="icon"></i>
            <i class="el-icon-bell" id="icon"></i>
            <template v-if="$store.state.Uid != -1">    
                <el-dropdown>            
                <span class="el-dropdown-link">
                    <el-avatar  style="margin:0rem 0rem 0 1rem;
                    height:2rem;width:2rem"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </span>
                <div style="position: relative;bottom:0.5rem;left:0.5rem;display:inline-block;">{{$store.state.name}}</div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item disabled>{{$store.state.name}}</el-dropdown-item>
                    <el-dropdown-item divided><span @click="logout()">登出</span></el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </template>
            <template v-else>
                <el-button type="primary" icon="el-icon-user" circle @click="logWindow()"></el-button>
            </template>
        </div>


        <van-dialog v-model="show" title="注册认证/登录" confirmButtonText="关闭">
            <LogAndSign></LogAndSign>
        </van-dialog>
</div>
</template>

<script>
import LogAndSign from '../components/user/LogAndSign'
export default {
    components: {
        LogAndSign
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        logWindow() {
            this.show = true;
        },
        logout() {
            console.log('hhh')
            localStorage.clear();
            sessionStorage.clear();
            this.$store.commit('resetState');
        
            location.reload();
        }
    },
    created: function() {
        console.log(this.$store.state.Uid)
    }
}
</script>

<style>

#icon {
    font-size: 1.2rem;
    margin: 2rem 0.3rem 1.5rem;
}

</style>