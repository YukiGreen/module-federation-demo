<template>
  <div class="home-wrapper">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/TabBar.vue';

export default {
  components: {
    tabBar,
  },
};
</script>

<style></style>