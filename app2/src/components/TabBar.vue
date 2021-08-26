<template>
  <div>
    tab bar
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      active: 'home',
    };
  },
  computed: {
    ...mapState({
      counterMap: (state) => state.counterMap,
    }),
    badge() {
      const l = Object.values(this.counterMap).reduce((prev, next) => prev + next, 0);
      if (l > 99) {
        return '99+';
      }
      return l;
    },
  },
};
</script>

<style lang="less" scoped></style>
