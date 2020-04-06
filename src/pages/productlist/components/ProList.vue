<template>
  <div class="prolist">
    <div class="container">
      <el-row class="bread">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>产品列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row class="detail">
        <el-col :span="6">
          <el-menu
            default-active="-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#258dde"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item
              class="detial-li"
              v-for="(item, index) of proList"
              :index="index.toString()"
              :key="item.id"
              @click="prodetail(item.id)"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.proName }}</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="18">
          <div class="pro-box" v-for="item of proList" :key="item.id">
            <img :src="item.imgUrl" alt="" />
            <h3>{{ item.proName }}</h3>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProList",
  data() {
    return {
      proList: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getProData() {
      axios.get("/api/product.json").then(res => {
        const data = res.data.data;
        this.proList = data;
      });
    },
    prodetail(id) {
      this.$router.push({ name: "ProductDetail", params: { id: id } });
    }
  },
  mounted() {
    this.getProData();
  }
};
</script>

<style lang="stylus" scoped>
.bread
  margin: 10px 0
.detail
    .detial-li
      i
        color: #fff
  .pro-box
    float: left
    width: 32%
    margin-left: 1.3%
    text-align: center
    margin-bottom: 25px
    img
      width: 100%
</style>
