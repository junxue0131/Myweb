<template>
  <div>
    <van-row>

      <van-col span="6">
        <!-- 排序选择 -->
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <el-button>
            排序<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">按赞数由高到低</el-dropdown-item>
            <el-dropdown-item icon="el-icon-plus">按赞数由低到高</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">按发布时间由晚到早</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">按发布时间由早到晚</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </van-col>

      <van-col span="2"></van-col>
      <van-col span="4"></van-col>
      <van-col span="4"></van-col>
      <van-col span="2"></van-col>

      <van-col span="6">
         <!-- 上传按钮 -->
         <el-button  type="primary" @click="show = true" style="float: right;">上传</el-button>
      </van-col>
    </van-row>
    
    <!-- 上传对话框 -->
    <van-dialog v-model="show" title="上传图片" :showCancelButton=true :showConfirmButton=false>
      <van-form @submit="onSubmit">
        <van-divider>自强Studio技术中心</van-divider>
        <van-field name="uploader" label="图片上传">
          <template #input>
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入内容"
              v-model="content">
            </el-input>
          </template>
        </van-field>
        <van-field name="uploader" label="图片上传">
          <template #input>
            <el-upload
              action="string"
              list-type="picture-card"
              :limit=1
              :http-request="conveyPic"
              :before-upload="beforeAvatarUpload">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-dialog>
    
    <!-- 图片展示容器 -->
    <div id="container" style="padding: 1.5rem 0rem 1.5rem 0rem">
    <div class="waterfall-height-css" v-loading="isloading">
      <div class="image-box" v-for="img in imgList" :key="img.url">
          <el-image id="img_s" :src="img.url" :preview-src-list="srcList" :fit="cover"/>
          <center>
          <div>图片语</div>
          <div>6赞  3评论</div>
          </center>
      </div>
    </div>
    </div>

    <!-- 分页器组件 -->
    <van-pagination v-model="currentPage" :page-count="Math.ceil(total/pageSize)" mode="simple" />
          
    
  </div>
</template>


<script>
import Vue from 'vue';
import { Pagination } from 'vant';
import { Dialog } from 'vant';
import { Button } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Col, Row } from 'vant';
import { Uploader } from 'vant';
import { Divider } from 'vant';


Vue.use(Divider);
Vue.use(Uploader);
Vue.use(Col);
Vue.use(Row);
Vue.use(Field);
Vue.use(Form);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Pagination);



export default {
  name: 'HeightCss',
  data() {
    return {
      //分页器
      imgList: [], //img-box所需列表
      srcList: [], //展示img的url列表
      total: 17, // 总图片数
      pageSize: 8, // 每页显示的数量
      isloading: false,
      currentPage: 1,
      
      //表单
      show: false,
      content: '',
      fileList: [],
      file: '',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  watch: {
    currentPage(oldV, newV) {
      console.log(oldV, newV);
      this.exchangeCurrentPage();
    }
  },
  methods: {
    //加载图片
    loadImage() {
      this.isloading = false;
      let t = (this.currentPage - 1) * this.pageSize;
      for (let i = t; i < t + this.pageSize; i++) {
        let image = new Image()
        let url = require(`@/assets/images/${i}.jpeg`)
        this.srcList.push(url)
        image.src = url
        image.onload = () => {
          this.imgList.push({
            url: url,
            width: image.width,
            height: image.height
          })
        }
      }
    },
    //翻页
    exchangeCurrentPage() {
      this.imgList = [];
      this.srcList = [];
      this.isloading = true;
      this.sleep().then(() => {
        this.loadImage();
      });
      
    },
    //睡眠函数
    sleep () {
        return new Promise((resolve) => setTimeout(resolve, 500));
    },
    //将上传文件传入本地变量
    conveyPic(f) {
      this.file = f.file;
    },
    //上传提交动作
    onSubmit(f) {
      let formData = new FormData()

      formData.append('file', this.file);
      formData.append('content', this.content);

      let config = {headers: {'Content-Type': 'multipart/form-data'}};

      this.$axios.post('http://localhost:8081/picture/uploadTest', formData, config).then(res => {
          if (res.data.code === 0) {
            this.$message({
            message: '上传成功！',
            type: 'success',
          });
        }
      })
    },
    //上传后文件检验
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    //上传成功后动作
    handleSuccess(response, file, fileList) {
      
    }
  },
  
  created() {
    this.loadImage()
  }
}
</script>



<style lang="scss" scope>
.waterfall-height-css {
  display: flex;
  // background-color: ;
  flex-wrap: wrap;
  .image-box {
    margin: 5px;
    flex-grow: 1;
  }
  #img_s {
    width: auto;
    display: block;
    min-width: 100%;
    height: 200px;
    object-fit: cover;
  }
  &:after {
    content: '';
    display: block;
    flex-grow: 99999;
  }
}
</style>

<style>

.el-image {
  display: block;
}

#container {
    min-height: 200px;
}

.el-message--success {
  z-index: 3000 !important;
}

</style>