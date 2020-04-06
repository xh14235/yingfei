<template>
  <div id="app">
    <common-header></common-header>
    <router-view />
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from './common/CommonHeader'
import CommonFooter from './common/CommonFooter'
export default {
  name: 'App',
  components: {
    CommonFooter,
    CommonHeader
  }
}
</script>

<style></style>
