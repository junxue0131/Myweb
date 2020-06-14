<template>
    <div>        
        <van-cell @click="show = true" style="color: #000000;">发表图片</van-cell>
        
        <div>
            <van-dialog v-model="show" title="标题" show-cancel-button>
                <img src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-dialog>
        </div>

        
    </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
import { Popup } from 'vant';
import { Dialog } from 'vant';


Vue.use(Popup);
Vue.use(Button);
Vue.use(Dialog);

export default {
    data() {
            return {
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            show: false
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },
        test() {
            console.log("hhh");
        }
    }

}
</script>

<style>



</style>