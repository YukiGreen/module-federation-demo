<template>
  <div class="banner-swipe bg-white">
    <van-swipe
      class="swipe-content"
      :autoplay="3000"
      :height="278"
      indicator-color="white"
    >
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img
          class="item-img"
          v-lazy="item.imageUrl"
          @click="clickHandler(item)"
        />
        <div
          class="custom-indicator"
          :style="{ backgroundColor: item.titleColor }"
        >
          {{ item.typeTitle }}
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  async created() {
    await this.getBanner();
  },
  data() {
    return {
      move: false,
      bannerList: [
        {
          adDispatchJson: null,
          adLocation: null,
          adSource: null,
          adid: null,
          encodeId: "1868874994",
          event: null,
          exclusive: false,
          extMonitor: null,
          extMonitorInfo: null,
          imageUrl:
            "http://p1.music.126.net/8rluHvRAd2UjzGBbavJ34Q==/109951166304692749.jpg",
          monitorBlackList: null,
          monitorClick: null,
          monitorClickList: null,
          monitorImpress: null,
          monitorImpressList: null,
          monitorType: null,
          program: null,
          scm: "1.music-homepage.homepage_banner_force.banner.3138005.1724121852.null",
          song: null,
          targetId: 1868874994,
          targetType: 1,
          titleColor: "red",
          typeTitle: "新歌首发",
          url: null,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["storageSongId", "showSongPlay"]),
    getBanner() {
      this.$api.getBanner().then((res) => {
        if (res && res.data && res.data.code === 200) {
          this.bannerList = res.data.banners;
        }
      });
    },
    clickHandler(item) {
      if (item.targetType === 1) {
        const musicArr = this.bannerList.filter((ele) => ele.targetType === 1);
        const ids = musicArr.map((ele) => ele.targetId);
        this.storageSongId({ id: item.targetId, ids, musicArr });
        this.showSongPlay(true);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.banner-swipe {
  padding: 11px;
  margin-top: 55px;

  .swipe-content {
    border-radius: 7px;

    .item-img {
      width: 100vw;
    }
    .custom-indicator {
      position: absolute;
      right: 0;
      bottom: 0;
      color: #eee;
      border-top-left-radius: 7px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
