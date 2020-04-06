<template>
  <div class="news">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <img
            class="newimg"
            src="http://www.infinair.com.cn/d/default/img/survey.jpg"
            alt=""
          />
        </el-col>
        <el-col :span="12">
          <h3 class="pro-left-title">品种齐全，方便一站式采购</h3>
          <ul>
            <li
              class="pro-right-li"
              v-for="item of news"
              :key="item.id"
              @click="newsdetail(item.id)"
            >
              {{ item.title }}
            </li>
          </ul>
          <el-button class="more" type="primary" @click="moreNews"
            >更多新闻</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNews",
  props: {
    news: Array
  },
  methods: {
    moreNews() {
      this.$router.push("/newslist");
    },
    newsdetail(id) {
      this.$router.push({ name: "NewsDetail", params: { id: id } });
    }
  }
};
</script>

<style lang="stylus" scoped>
.news
  margin-top: 15px
  .container
    .newimg
      width: 96%
      margin: 0 2%
    .pro-left-title
      font-size: 24px
      color: #363636
      margin-top: 45px
    ul
      .pro-right-li
        list-style none
        margin: 25px 5% 0 0
    .more
      float: right
      margin: 45px 5% 0 0
</style>
