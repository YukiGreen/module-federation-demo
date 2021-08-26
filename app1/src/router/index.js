import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import MyHome from '@/views/MyHome.vue';

VueRouter.prototype.back = false;
VueRouter.prototype.goBack = function goBack() {
  this.back = true;
  this.go(-1);
};
Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/home/my-home',
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'my-home',
        name: 'myHome',
        component: MyHome,
      }
    ],
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;