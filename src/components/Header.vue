<template>
  <!--xs: phone, sm: pad, md: pc, lg: 2k-pc, xl: 4k-pc-->
  <div class="header">
    <!-- 顶部导航 -->
    <div class="container">
      <ul class="container-left-ul">
          <!-- <img id="icon" src="@assets/image/icon.png"/> -->
        <a href="/"><div style="display:inline-block;padding: 1rem 2.5rem 1rem 2rem;">ZQHOME</div></a>
        <div :class="$store.state.activeName === item.activeName ? 'menu-item-active' : 'container-left-li'"
          v-for="(item, index) in leftMenuList" :key="index" @click="toActiveMenuItem(item)" 
          style="display:inline-block;padding: 1rem 1rem 1rem 1rem;height:100%">
          {{ item.titleName }}
        </div>
      </ul>
      <ul class="container-right-ul">
        <div id="bars" @click="dropDownShow = !dropDownShow" style="display:inline-block;padding: 1rem 2rem 1rem 2rem;">
          <i class="fa fa-bars fa-lg">ZQ</i>
        </div>
      </ul>
    </div>

    <!-- 下拉菜单 -->
    <transition name="dropdown-fade-show">
      <div v-show="dropDownShow" class="dropdown">
        <center>
        <ul class="dropdown-top-ul">
          <li class="dropdown-top-li" v-for="(item, index) in leftMenuList" :key="index" @click="toActiveMenuItem(item)">{{ item.titleName }}</li>
        </ul>
        </center>
      </div>
    </transition>

  </div>
</template>




<script>
export default {
  name: 'Header',
  data () {
    return {
      dropDownShow: false, // 控制下拉菜单显示
      leftMenuList: [ // 左侧菜单内容
        { activeName: 'Home', titleName: '图片墙', activeUrl: '/' },
        { activeName: 'Infinity', titleName: '资源聚合', activeUrl: '/infinity' },
        { activeName: 'About', titleName: '自强新闻', activeUrl: '/about' },
        { activeName: 'About', titleName: '关于我们', activeUrl: '/about' }
      ],
      rightMenuList: [ // 右侧菜单内容
        { activeName: 'Support', titleName: '赞助', activeUrl: '/support' }
      ],
      activeName: '' // 导航栏激活名称
    }
  },
  methods: {
    toActiveMenuItem (item) { // 激活导航菜单
      this.activeName = item.titleName
      this.$router.push(item.activeUrl)
      this.dropDownShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/init.stylus" // 初始化导航栏参数
@import "../assets/stylus/fade.stylus" // 实现导航栏下拉展示动画效果
.header
  color $headerTextColor
  background $headerBg
  height 50.4px
  width 100%
  position fixed
  top 0
  padding 0 10%
  .container
    width 100%
    height 100%
    .container-left-ul
      float left
      li
        height 100%
        line-height $header-height
        width $header-li-width
        display inline-block
      #icon
        height 30px
        vertical-align middle
        transition transform 0.5s
      #icon:hover
        transform scale(1.5, 1.5) rotate(180deg)
      .container-left-li:hover
        color $menu-active-color
        box-shadow 0px -4px 0px $menu-active-color inset
    .container-right-ul
      float right
      li
        height 100%
        line-height $header-height
        width $header-li-width
        display inline-block
      .container-right-li:hover
        color $menu-active-color
        box-shadow:0px -4px 0px $menu-active-color inset
      #bars > i
        padding 8px 14px
        border 1px $headerTextColor solid
        border-radius 5px
  .dropdown
    width 100%
    background $headerBg
    li
      height 40px
      line-height 40px
    li:hover
      background black

.menu-item-active
  color $menu-active-color
  box-shadow 0px -4px 0px $menu-active-color inset

@media screen and (max-width: 768px) {
  .header {
    padding 0
  }
}
@media screen and (max-width: 768px) {
  .container-left-li {
    display none !important
  }
  .container-right-li {
    display none !important
  }
}
@media screen and (min-width: 768px) {
  #bars {
    display none
  }
  .dropdown {
    display none
  }
}
</style>

<style>
a {
    color: #ffffff;
}

</style>