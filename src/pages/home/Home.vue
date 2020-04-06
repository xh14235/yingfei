<template>
  <div class="hello">
    <!-- <common-header></common-header> -->
    <home-banner></home-banner>
    <home-product :product="product"></home-product>
    <home-news :news="news"></home-news>
    <!-- <common-footer></common-footer> -->
  </div>
</template>

<script>
// import CommonHeader from "../../common/CommonHeader";
// import CommonFooter from "../../common/CommonFooter";
import HomeBanner from "./components/HomeBanner";
import HomeProduct from "./components/HomeProduct";
import HomeNews from "./components/HomeNews";
import axios from "axios";
export default {
  name: "Home",
  components: {
    // CommonHeader,
    // CommonFooter,
    HomeBanner,
    HomeProduct,
    HomeNews
  },
  data() {
    return {
      product: [],
      news: []
    };
  },
  methods: {
    getProData() {
      axios.get("/api/product.json").then(res => {
        const data = res.data.data;
        this.product = data;
      });
    },
    getNewsData() {
      axios.get("/api/news.json").then(res => {
        const data = res.data.data;
        this.news = data;
      });
    }
  },
  mounted() {
    this.getProData();
    this.getNewsData();
  }
};
</script>

<style scoped></style>
