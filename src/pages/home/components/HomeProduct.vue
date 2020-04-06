<template>
  <div class="product">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <h3 class="pro-left-title">品种齐全，方便一站式采购</h3>
          <ul>
            <li
              class="pro-left-li"
              v-for="item of product"
              :key="item.id"
              @click="prodetail(item.id)"
            >
              {{ item.proName }}
            </li>
          </ul>
          <el-button class="more" type="primary" @click="morePro"
            >更多产品</el-button
          >
        </el-col>
        <el-col :span="12">
          <ul>
            <li
              class="pro-right-li"
              v-for="(item, index) of product"
              :key="item.id"
              @mouseenter="imgenter(index)"
              @mouseleave="imgleave(index)"
              @click="prodetail(item.id)"
            >
              <img :src="item.imgUrl" alt="" />
              <transition name="fade">
                <div v-show="item.show" class="pro-right-title">
                  {{ item.proName }}
                </div>
              </transition>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeProduct",
  props: {
    product: Array
  },
  methods: {
    imgenter(index) {
      this.product[index].show = true;
    },
    imgleave(index) {
      this.product[index].show = false;
    },
    morePro() {
      this.$router.push("/productlist");
    },
    prodetail(id) {
      this.$router.push({ name: "ProductDetail", params: { id: id } });
    }
  }
};
</script>

<style lang="stylus" scoped>
.product
  margin-top: 15px
  .container
    .pro-left-title
      font-size: 24px
      color: #363636
      margin-top: 45px
    ul
      .pro-left-li
        list-style none
        float: left
        width: 45%
        margin: 25px 5% 0 0
    .more
      float: right
      margin: 45px 5% 0 0
    ul
      .pro-right-li
        position relative
        list-style none
        width: 31%
        margin: 0 1%
        float: left
        img
          width: 100%
        .pro-right-title
          position absolute
          top 0
          right 0
          bottom  0
          left 0
          width 100%
          text-align center
          color #fff
          background #258dde
          opacity: 1
          &.fade-enter, &.fade-leave-to
            opacity: 0
          &.fade-enter-active, &.fade-leave-active
            transition: all 0.3s
</style>
