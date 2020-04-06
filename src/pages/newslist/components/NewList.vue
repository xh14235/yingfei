<template>
  <div class="newslist">
    <div class="container">
      <el-row class="bread">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <div class="list">
        <li
          v-for="item of newsList"
          :key="item.id"
          @click="newsDetail(item.id)"
        >
          {{ item.title }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewList",
  data() {
    return {
      newsList: []
    };
  },
  methods: {
    getNewsData() {
      axios.get("/api/news.json").then(res => {
        const data = res.data.data;
        this.newsList = data;
      });
    },
    newsDetail(id) {
      // this.$router.push({ path: "/newsdetail", query: { id: id } });
      this.$router.push({ name: "NewsDetail", params: { id: id } });
    }
  },
  mounted() {
    this.getNewsData();
  }
};
</script>

<style lang="stylus" scoped>
.newslist
  height: 90vh
  .bread
    margin: 10px 0
  .list
    li
      list-style: none
      margin-bottom: 15px;
      color: #6f6f6f
</style>
