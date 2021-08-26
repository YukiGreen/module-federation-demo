import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api';
import animate from './utils/animate';
import './plugins/element';
import './styles/index.less';
import { loadRemoteComponent } from './utils/loadRemote.js';

// import('app1/storeAppOne').then(res => {
//   store.registerModule('storeAppOne', res.options);
// });
// async function queryStore() {
//   const storeOne = await loadRemoteComponent({
//       url: 'http://localhost:8889/dist/remoteEntry1.js',
//       scope: 'app1',
//       module: './storeAppOne',
//   });
//   store.registerModule('storeAppOne', storeOne.options);
// }

// queryStore();

Vue.prototype.$api = api;
Vue.prototype.$animateqqq = animate;
Vue.config.productionTip = false;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
