<template>
  <div>

    <div style="height:3rem"></div>

    <center><h2><strong>Some pictures</strong></h2></center>

    <van-row>

      <van-col span="6" >
        <!-- 排序选择按钮 -->
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <el-button>
            排序<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
          </span>
          <el-dropdown-menu slot="dropdown">
            <div @click="reorder('最新发布')"><el-dropdown-item >最新发布</el-dropdown-item></div>
            <div @click="reorder('最早发布')"><el-dropdown-item >最早发布</el-dropdown-item></div>
            <div @click="reorder('最多浏览')"><el-dropdown-item>最多浏览</el-dropdown-item></div>
            <div @click="reorder('最多赞数')"><el-dropdown-item>最多赞数</el-dropdown-item></div>
            <div @click="reorder('最多评论')"><el-dropdown-item>最多评论</el-dropdown-item></div>
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
        <van-field name="uploader" label="说点什么">
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
      <div class="image-box" v-for="(img, index) in imgList" :key="img.id">
        <van-image
          style="cursor: pointer;"
          width="22rem"
          height="22rem"
          fit="cover"
          :src="srcList[index]"
          lazy-load
          @click="getPicInfo(List[index].id)">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
        </van-image>
        <center>
          <div>{{ List[index].picInfo }}</div>
          <div><i class="el-icon-star-off"></i>{{ List[index].like }}赞  {{ List[index].view }}浏览</div>
        </center>
      </div>
    </div>
    </div>

    <!-- 分页器组件 -->
    <van-pagination v-model="currentPage" :page-count="Math.ceil(total/pageSize)" mode="simple"/>
          
    
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
import { Image as VanImage } from 'vant';
import { Lazyload } from 'vant';
import { Loading } from 'vant';

Vue.use(Loading);
Vue.use(Lazyload);
Vue.use(VanImage);
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
      //图片列表
      List: [], //图片对象信息列表
      imgList: [], //img-box所需列表
      srcList: [], //展示img的url列表(缩略图)
      order: '最新发布', //图片展示顺序，默认按最新地时间进行展示

      //分页器
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

      //通过后端接口获取图片url
      let formData = new FormData();
      formData.append('page', this.currentPage);
      formData.append('counts', this.pageSize);
      formData.append('order', this.order);

      //请求后端接口
      this.$api.picture.getPic(formData).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          for (let i = 0; i < this.pageSize; i++) {
            let image = new Image();
            let url = 'http://' + res.data.data[i].picUrl + '?x-oss-process=image/resize,p_50';
            let urlDetail = 'http://' + res.data.data[i].picUrl;

            //装入数据
            this.List.push(res.data.data[i]);
            this.srcList.push(url);
            image.src = url;
            image.onload = () => {
              this.imgList.push({
                url: url,
                width: image.width,
                height: image.height,
              })
            }
          }
        }
      })
    },
    //翻页
    exchangeCurrentPage() {
      this.List = [];
      this.imgList = [];
      this.srcList = [];
      this.isloading = true;
      this.loadImage();
      // 虚假加载
      // this.sleep().then(() => {
      //   this.loadImage();
      // });
    },
    //排序
    reorder: function(order) {
      this.order = order;
      this.exchangeCurrentPage();
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
      formData.append('id', this.$store.state.Uid);

      if (this.file === '') {
        this.$message.error('请上传图片!');
        return;
      }

      this.$message('上传中...');

      this.$api.picture.upload(formData).then(res => {
          if (res.data.code === 0) {
            this.$message({
              message: '上传成功！',
              type: 'success',
          });
          location.reload();
        } else {
            this.$message.error(res.data.msg);
        }
        this.show = false;
      })

      this.imgList = [];
      this.loadImage();
      console.log('hhh');
    },
    //上传后文件检验
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt5M = file.size / 1024 / 1024 < 5;

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!');
        }
        if (!isLt5M) {
          this.$message.error('上传头像图片大小不能超过 5MB!');
        }
        return isJPG && isLt5M;
    },
    //点赞
    like(index) {
      this.$api.picture.like(this.List[index].id).then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          // this.$message({
          //     message: '点赞成功！',
          //     type: 'success',
          //   });
        }
      })
    },
    //进入图片详情页，浏览量增加
    getPicInfo(id) {
      console.log(id);
      this.$api.picture.view(id).then(res => {})
      this.$router.push({path: '/picInfo/'+id})
    }
  },
  created() {
    this.loadImage()
    this.$api.picture.total().then(res => {
      this.total = res.data.data;
    })
  }
}
</script>



<style lang="scss" scope>
.waterfall-height-css {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .image-box {
    margin: 5px;
    // flex-grow: 1;
  }
  // #img_s {
  //   width: auto;
  //   display: block;
  //   min-width: 100%;
  //   height: 200px;
  //   object-fit: cover;
  // }
  // &:after {
  //   content: '';
  //   display: block;
  //   flex-grow: 99999;
  // }
}

#pic {
  background-color: gainsboro;
  width: 22rem;
  height: 22rem;
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

.el-message--error {
  z-index: 3000 !important;
}

.el-message {
  z-index: 3000 !important;
}

.el-button {
  margin: 0 5px;
}

</style>