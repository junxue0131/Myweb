<template>
    <div>
        <el-button type="primary" circle id="rrr" @click="dialogFormVisible = true">
            <center>
                <i class="el-icon-edit" id="icon"></i>
            </center>
        </el-button>

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
            }
        }
    },
    methods: {
        
        test() {
            console.log("hhh");
        }
    }

}
</script>

<style>

#rrr {
    font-size: 0.25rem;
    padding: 2rem;
    position: fixed;
    bottom: 5%;
    right: 5%;
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