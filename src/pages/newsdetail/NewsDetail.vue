<template>
  <div class="newsdetail">
    <div class="container">
      <el-row class="bread">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/newslist' }"
            >新闻列表</el-breadcrumb-item
          >
          <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <div class="detail">
        detail - <span>{{ newsnum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
  data() {
    return {
      newsnum: 0
    };
  },
  mounted() {
    this.newsnum = this.$route.params.id;
  }
};
</script>

<style lang="stylus" scoped>
.newsdetail
  height: 90vh
  .container
    .bread
      margin: 10px 0
</style>
