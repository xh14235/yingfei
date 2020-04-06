<template>
  <div class="newslist">
    <!-- <common-header></common-header> -->
    <new-list></new-list>
    <!-- <common-footer></common-footer> -->
  </div>
</template>

<script>
// import CommonHeader from "../../common/CommonHeader";
// import CommonFooter from "../../common/CommonFooter";
import NewList from "./components/NewList";
export default {
  name: "NewsList",
  components: {
    // CommonHeader,
    // CommonFooter,
    NewList
  }
};
</script>

<style scoped></style>
