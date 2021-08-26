import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from './api';
import animate from './utils/animate';
import './plugins/element';
import './styles/index.less';

Vue.prototype.$api = api;
Vue.prototype.$animate = animate;
Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");