/*
 * @Author: zhangchao
 * @Date: 2019-10-23 17:00:51
 * @LastEditors: zhangchao
 * @LastEditTime: 2019-11-23 18:20:19
 */
import Vue from 'vue';
import  Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/less/main.less';
import App from './App.vue';
import router from './router';
import './router/router.interceptor';
import store from './store';
import SvgIcon from 'vue-svgicon';
import i18n from './lang';
import '../mock/index';

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
});

Vue.config.productionTip = false;
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
