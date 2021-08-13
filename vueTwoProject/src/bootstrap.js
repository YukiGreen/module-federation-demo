import Vue from 'vue';
import VueTwoDashboard from './components/vueTwoDashboard.vue';
function mount(el,name) {
  new Vue({
    render: h =>
      h(VueTwoDashboard, {
        props: {
          name: name,
        },
      }),
  }).$mount(el);
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-vueTwoProject');
  el && mount(el, 'vue_two');
}

export { mount };
