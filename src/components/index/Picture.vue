<template>
<div>
    
    <div style="padding: 0 2rem 0 2rem">
    <div style="height:20px"></div>
    <center><h2>Picture</h2></center>
    <el-divider></el-divider>
    <div style="height:10px"></div>
    <el-carousel indicator-position="outside" height="20rem" type="card">
        <el-carousel-item v-for="url in urls" :key="url">
            <center>
            <el-image
            :src="url"
            :fit="contain">
            </el-image>
            </center>
        </el-carousel-item>
    </el-carousel>
    </div>
</div>
</template>

<script>
export default {
    data() {
      return {
		urls: ['https://s1.ax1x.com/2020/06/06/tyibYn.png', ''],
		show: false,
      }
	},
}
</script>

<style src="../../assets/css/main.css" scoped></style>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>