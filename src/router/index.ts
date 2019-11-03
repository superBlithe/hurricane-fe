import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);
const importByPageName = (page: String) => () =>
  import(
     /* webpackPrefetch: true */ /* webpackChunkName: "[request]" */ /* webpackMode: "lazy" */ `../views/${page}.vue`
  );

const routes = [
  {
    path: '/login',
    component: importByPageName('login'),
    hidden: true
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home', requiresAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'about', requiresAuth: true }
  },
  {
    path: '/index',
    name: 'index',
    component: importByPageName('index'),
    meta: { title: 'index', requiresAuth: true }
  }
];

const router = new VueRouter({
  routes
});

export default router;
