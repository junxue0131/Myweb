<template>
<div>
    <template v-if="show === -1">
        <center style="margin: 1rem">
        <el-button type="success" plain @click="showS(0)">注册认证</el-button>
        <el-button type="primary" plain @click="showS(1)">登录</el-button>
        </center>
    </template>

    <template v-if="show === 0">
        <center>
        <div style="margin: 1rem">
        <el-button icon="el-icon-back" circle @click="show = -1"></el-button>
        </div>
        </center>

        <van-form @submit="sign">
            <van-divider>为了确保您是武大同学</van-divider>
            <van-field
                v-model="username"
                name="sid"
                label="学号"
                placeholder="学号"
                :rules="[{ required: true, message: '请填写学号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="pwd"
                label="密码"
                placeholder="默认为信息门户密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="name"
                name="name"
                label="昵称"
                placeholder="给自己起个昵称吧"
                :rules="[{ required: true, message: '请填写昵称' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                注册认证
                </van-button>
            </div>
        </van-form>
        
    </template>

    <template v-if="show === 1">
        <center>
        <div style="margin: 1rem">
        <el-button icon="el-icon-back" circle @click="show = -1"></el-button>
        </div>
        </center>

        <van-form @submit="login">
            <van-field
                v-model="username"
                name="sid"
                label="学号"
                placeholder="学号"
                :rules="[{ required: true, message: '请填写学号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="pwd"
                label="密码"
                placeholder="默认为信息门户密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                登录
                </van-button>
            </div>
        </van-form>
    </template>
</div>
</template>

<script>
export default {
    inject:["reload"],
    data() {
        return {
            show: -1,
            username: '',
            password: '',
        }
    },
    methods: {
        showS(code) {
            this.show = code;
        },
        sign(values) {
            console.log('submit', values);

            let formData = new FormData();
            formData.append('sid', values.sid);
            formData.append('pwd', values.pwd);
            formData.append('name', values.name);

            this.$api.user.signUp(formData).then(res => {
                console.log(res);
                if (res.data.code === 0) {
                    this.$message({
                        message: '注册成功!',
                        type: 'success'
                    });
                } else {
                    this.$message.error(res.data.msg);
                }
            })
        },
        login(values) {
            console.log('submit', values);

            let formData = new FormData();
            formData.append('sid', values.sid);
            formData.append('pwd', values.pwd);

            this.$api.user.login(formData).then(res => {
                console.log(res);
                if (res.data.code === 0) {
                    this.$message.success("登录成功!");
                    this.$store.state.token = 'Bearer '+res.data.data.token;
                    this.$store.state.Uid = res.data.data.id;
                    this.$store.state.name = res.data.data.name;

                    //获取用户信息
                    this.$api.user.getInfo().then(res => {
                        if (res.data.code === 0) {
                            this.$store.state.userInfo = res.data.data;
                        } else {
                            this.$message.error("获取用户信息失败！");
                        }
                    })
                    this.reload();
                } else {
                    this.$message.error(res.data.msg);
                }
            })

            
        }
    }
}
</script>

<style>

</style>