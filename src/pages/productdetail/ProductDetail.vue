<template>
  <div class="prodetail">
    <div class="container">
      <el-row class="bread">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/productlist' }"
            >产品列表</el-breadcrumb-item
          >
          <el-breadcrumb-item>产品详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <div class="detail">
        detail - <span>{{ pronum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      pronum: 0
    };
  },
  mounted() {
    this.pronum = this.$route.params.id;
  },
  watch: {
    $route(to, from) {
      this.pronum = this.$route.params.id;
    }
  }
};
</script>

<style lang="stylus" scoped>
.prodetail
  height: 90vh
  .container
    .bread
      margin: 10px 0
</style>
