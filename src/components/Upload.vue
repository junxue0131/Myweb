<template>
    <div>
        <!-- <el-button type="primary" circle id="rrr" @click="dialogFormVisible = true">
            <center>
                <i class="el-icon-edit" id="icon"></i>
            </center>
        </el-button> -->

        
        <van-cell is-link @click="showPopup">展示弹出层</van-cell>
        <van-popup v-model="show"  position="left" :style="{ height: '100%', width: '30%' }">内容</van-popup>
        

        <el-dialog title="发表图片" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="想说的话">
                    <el-input type="textarea" v-model="form.name"></el-input>
                </el-form-item>
            </el-form>
            <center>
            <div slot="footer" class="dialog-footer">
                <el-button id="windowButton" @click="dialogFormVisible = false">取 消</el-button>
                <el-button id="windowButton"  type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
            </center>
        </el-dialog>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(Button);

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

#rr {
    position: fixed;
    bottom: 5%;
    max-width:5%;
}


#icon {
    font-size:1rem;
}

/* #windowButton {
    font-size: 20%;
}

.el-dialog {
    
} */

/* #tInput {
    width: 100%;
} */

/* .el-form-item__label {
    text-align: center;
}

.el-dialog__headerbtn {
    font-size: 15%;
    text-align: center;
    float: right;
} */

</style>