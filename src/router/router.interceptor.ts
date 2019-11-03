/*
 * @Author: zhangchao
 * @Date: 2019-10-31 17:26:43
 * @LastEditors: zhangchao
 * @LastEditTime: 2019-11-01 17:20:05
 */

import { Route } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from '../store';

import router from './index';

router.beforeEach((to: Route, from: Route, next: Function) => {
  NProgress.start();
  //to.meta.auth 表示需要做登录健全
  //不需要的 可以直接next
  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    //store.state.token 表示已经登录 可以直接next
    //没有登录 跳转到/login 并携带参数redirect 方便登录后直接跳转到to.path
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.path }
      });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
