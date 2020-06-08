<template>
  <div class="waterfall-height-css">
    <div class="image-box" v-for="img in imgList" :key="img.url">
      <el-image id="img_s" :src="img.url" :preview-src-list="srcList" :fit="cover"/>
      <!-- <img id="img_s" :src="img.url" :preview-src-list="srcList" :fit="cover" class="el-image__inner el-image__preview"/> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeightCss',
  data() {
    return {
      imgList: [],
      srcList: []
    }
  },
  methods: {
    loadImage() {
      for (let i = 0; i < 17; i++) {
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

</style>