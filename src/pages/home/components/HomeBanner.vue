<template>
  <div class="banner">
    <el-carousel>
      <el-carousel-item v-for="item in carousel" :key="item.id">
        <img class="carousel-img" :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  data() {
    return {
      carousel: [
        {
          id: "0001",
          imgUrl: "http://www.infinair.com.cn/d/default/img/banner2.jpg"
        },
        {
          id: "0002",
          imgUrl: "http://www.infinair.com.cn/d/default/img/banner3.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.banner >>> .el-carousel__button
  height: 5px;
.carousel-img
  width: 100%
</style>
