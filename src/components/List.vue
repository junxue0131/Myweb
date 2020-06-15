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
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :limit=1
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
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
      //分页器组件
      imgList: [], //img-box所需列表
      srcList: [], //展示img的url列表
      total: 17, // 总图片数
      pageSize: 8, // 每页显示的数量
      isloading: false,
      currentPage: 1,
      
      //表单组件
      show: false,
      content: '',
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: 'https://cloud-image', isImage: true },
      ]
    }
  },
  watch: {
    currentPage(oldV, newV) {
      console.log(oldV, newV);
      this.exchangeCurrentPage();
    }
  },
  methods: {
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
    exchangeCurrentPage() {
      this.imgList = [];
      this.srcList = [];
      this.isloading = true;
      this.sleep().then(() => {
        this.loadImage();
      });
      
    },
    sleep () {
        return new Promise((resolve) => setTimeout(resolve, 500));
    },
    nextPage() {
      if (this.currentPage < this.total / this.pageSize) {
        this.currentPage++;
      }
      
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    cover() {
      
    },
    onSubmit(values) {
      console.log('submit', values);
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

</style>