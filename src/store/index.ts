import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import axios from 'axios';
import services from '@/services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem('token'),
    auth: false,
    userInfo: {},
    userRoutes: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      window.localStorage.setItem('token', token);
    },
    clearToken(state) {
      state.token = '';
      window.localStorage.setItem('token', '');
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      state.auth = true; // 获取到用户信息的同时将auth标记为true，当然也可以直接判断userInfo
      // 生成用户路由表
      // state.userRoutes = dynamicRoutes.filter(route => {
      //   return userInfo.menus.some(menu => menu.name === route.name)
      // })
      router.addRoutes(state.userRoutes); // 注册路由
    }
  },
  actions: {
    async login(ctx, account) {
      const res2 = await services.loginByUsername({
        data: {
          username: 'aaa',
          password: 'userInfo.password'
        }
      });
      const { code, data } = res2;
      console.log('res2', res2);
      
      axios.get('/api/login').then(res => {
        console.log(res);
      });
      axios.get('/api/info').then(res => {
        console.log(res);
      });
      // return login(account).then((response: any) => {
      //   if (response.code === 200) {
      //     ctx.commit('setUserInfo', response.data.userInfo);
      //     ctx.commit('setToken', response.data.token);
      //   }
      // });
    }
  },
  modules: {}
});
