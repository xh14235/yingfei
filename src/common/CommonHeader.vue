<template>
  <div class="common-header">
    <div class="container">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#258dde"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <img style="float: left;margin: 5px 10px 0 0;" src="../assets/logo.png" alt />
        <el-menu-item index="1">
          <router-link to="/">网站首页</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">产品列表</template>
          <el-menu-item
            v-for="(item, index) of proList"
            :key="item.id"
            :index="'2-' + (index + 1)"
            @click="prodetail(item.id)"
          >{{ item.proName }}</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">新闻列表</el-menu-item>
        <el-menu-item index="4">联系我们</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CommonHeader',
  data() {
    return {
      activeIndex: '0',
      proList: []
    }
  },
  methods: {
    getProData() {
      axios.get('/api/product.json').then(res => {
        const data = res.data.data
        this.proList = data
      })
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push('/')
          break
        case '2':
          this.$router.push('/productlist')
          break
        case '3':
          this.$router.push('/newslist')
          break
        case '4':
          this.$router.push('/contact')
          break
        default:
          break
      }
    },
    prodetail(id) {
      this.$router.push({ name: 'ProductDetail', params: { id: id } })
    }
  },
  mounted() {
    this.getProData()
    let hash = window.location.hash.replace('#/', '')
    this.$nextTick(() => {
      switch (hash) {
        case 'contact':
          this.activeIndex = '4'
          break
        case 'newslist':
          this.activeIndex = '3'
          break
        case 'newsdetail':
          this.activeIndex = '3'
          break
        case 'productlist':
          this.activeIndex = '2'
          break
        case 'productdetail':
          this.activeIndex = '2'
          break
        case '':
          this.activeIndex = '1'
          break

        default:
          break
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.common-header >>> .el-menu.el-menu--horizontal
  border-bottom: none
.common-header >>> .el-submenu__icon-arrow
  color: #fff
.common-header >>> .router-link-active
  text-decoration: none
.common-header
  background: #258dde
</style>
