<template>
  <div id="app">
    <div id="content">
      <vue-waterfall-easy id="waterfall" :imgsArr="srcList" @scrollReachBottom="getData">
        <div slot="waterfall-head"></div>
      </vue-waterfall-easy>
    </div>
  </div>
</template>
<script>
import vueWaterfallEasy from 'vue-waterfall-easy'

export default {
  name: 'List',
  components: {
    vueWaterfallEasy
  },
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
        this.srcList.push({'src': url, 'href': '#'})
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

<style lang="scss" scoped>
.waterfall-height-css {
  display: flex;
  flex-wrap: wrap;
  .image-box {
    margin: 4px;
    flex-grow: 0;
  }
  img {
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


#waterfall.vue-waterfall-easy-container >>> .vue-waterfall-easy-scroll {
  overflow-y: hidden;
}
</style>

<style lang="scss">
.waterfall-height-css {
  margin:0px 5% 0px 5%;
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
    height: 300px;
    object-fit: cover;
  }
  &:after {
    content: '';
    display: block;
    flex-grow: 99999;
  }
}

#app {
  position: relative;
  #head {
    display: block;
    text-align: center;
    background: #000;
    color: #cccccc;
    line-height: 32px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    position: fixed;
    z-index: 999;
    width: 100%;
  }
  #content {
    position: absolute;
    top: 32px;
    bottom: 0;
    width: 100%;
  }
}
// .__err__ .img-wraper {
//   background: url(/static/img/1.jpg) no-repeat center/100px 100px !important;
// }
#app {
  overflow: auto;
  position: relative;
  .some-info {
    line-height: 1.6;
    text-align: center;
  }
}

</style>