/*
 * @Author: zhangchao
 * @Date: 2019-10-23 17:00:51
 * @LastEditors: zhangchao
 * @LastEditTime: 2019-11-01 10:22:26
 */
import Vue from 'vue';
import  Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';
import './router/router.interceptor';
import store from './store';
import '../mock/index';

Vue.config.productionTip = false;
Vue.use(Element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
