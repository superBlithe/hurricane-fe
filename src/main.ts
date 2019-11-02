/*
 * @Author: zhangchao
 * @Date: 2019-10-23 17:00:51
 * @LastEditors: zhangchao
 * @LastEditTime: 2019-11-01 10:22:26
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./router/router.interceptor";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
