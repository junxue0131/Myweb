<template>
  <div>
    <div class="waterfall-height-css" v-loading="isloading">
      <div class="image-box" v-for="img in imgList" :key="img.url">
        <el-row>
        <el-col :span="24">
        <el-image id="img_s" :src="img.url" :preview-src-list="srcList" :fit="cover"/>
        </el-col>
        </el-row>
      </div>
    </div>
    <!-- <div class="newList-list"  v-if="(!isloading) && (arrData.length === 0)">暂无数据</div> -->

  
    <el-row id="container">
        <el-pagination 
        small="true"
        background layout="prev, pager, next" 
        :total="total"
        :page-size="pageSize"
        :current-page.sync="currentPage"
        style="width:10px;">
        </el-pagination>
    </el-row>
    
  </div>
</template>


<script>
export default {
  name: 'HeightCss',
  data() {
    return {
      imgList: [], //img-box所需列表
      srcList: [], //展示img的url列表
      total: 17, // 总图片数
      pageSize: 8, // 每页显示的数量
      isloading: false,
      currentPage: 1
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
  display: grid;
  grid-template-columns: 45% auto 50%;
}

</style>