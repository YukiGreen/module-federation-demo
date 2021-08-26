import Vue from 'vue';
import com from './index.vue';

const Animate = Vue.extend(com);

export default function createAnimate({
  startX, startY, endX, endY, src, width, height,
}) {
  const app = new Animate({
    el: document.createElement('div'),
    data() {
      return {
        moveX: startX,
        moveY: startY,
        sx: 1,
        sy: 1,
        opacity: 1,
        exist: true,
        src,
        width,
        height,
      };
    },
  });
  document.body.appendChild(app.$el);
  setTimeout(() => {
    app.moveX = endX;
    app.moveY = endY;
    app.sx = 0.1;
    app.sy = 0.1;
    app.opacity = 0;
  }, 0);
  setTimeout(() => {
    app.exist = false;
  }, 1000);
}
