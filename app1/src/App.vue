<template>
  <div id="app">
      <router-view class="view"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {};
  }
};
</script>

<style>
.view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transition: all .3s linear;
}
</style>
