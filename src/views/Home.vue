<!--
 * @Author: zhangchao
 * @Date: 2019-10-23 17:00:51
 * @LastEditors: zhangchao
 * @LastEditTime: 2019-10-31 18:18:27
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
