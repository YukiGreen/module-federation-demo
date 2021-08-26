<template>
  <div
    class="tab-wrapper bg-white"
    ref="scroll"
    @touchstart="move = false"
    @touchmove="move = true"
  >
    <router-link
      class="tab-item"
      to="/search"
      tag="div"
      v-for="(item, i) in menuList"
      :key="item.id"
      :data-id="i"
    >
      <div class="img-box">
        <img :src="item.iconUrl" />
      </div>
      <div class="title-box">{{ item.name }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  async created() {
    await this.getDragonBall();
  },
  data() {
    return {
      move: false,
      menuList: [
        {
          id: -1,
          name: "每日推荐",
          iconUrl:
            "http://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg",
          url: "orpheus://songrcmd",
          skinSupport: true,
          homepageMode: "RCMD_MODE",
        },
      ],
    };
  },
  methods: {
    getDragonBall() {
      this.$api.getDragonBall().then((res) => {
        if (res && res.data && res.data.code === 200) {
          this.menuList = res.data.data;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.tab-wrapper {
  display: flex;
  height: 95px;
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom: 0.01rem solid #d3d3d3;
  .tab-item {
    flex-shrink: 0;
    width: 50px;
    padding: 10px 5px;
    text-align: center;
    .img-box {
      width: 100%;
      height: 50px;
      border-width: 2px;
      border-style: solid;
      border-color: transparent;
      border-radius: 23px;
      img {
        background-color: #e60025;
        width: 45px;
        height: 45px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
      }
    }
    .title-box {
      margin-top: 5px;
      font-size: 12px;
    }
  }
}
.tab-wrapper::-webkit-scrollbar {
  width: 0px;
  background: none;
}
</style>
