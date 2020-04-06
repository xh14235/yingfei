<template>
  <div class="productlist">
    <!-- <common-header></common-header> -->
    <pro-list></pro-list>
    <!-- <common-footer></common-footer> -->
  </div>
</template>

<script>
// import CommonHeader from "../../common/CommonHeader";
// import CommonFooter from "../../common/CommonFooter";
import ProList from "./components/ProList";
export default {
  name: "ProductList",
  components: {
    // CommonHeader,
    // CommonFooter,
    ProList
  }
};
</script>

<style scoped></style>
