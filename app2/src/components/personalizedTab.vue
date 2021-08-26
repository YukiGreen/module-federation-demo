<template>
  <div class="hot bg-white">
    <div class="hot-header">
      <h3>推荐歌单</h3>
      <div class="hot-header-btn">
        <van-button class="btn" type="default" size="mini" round
          >更多<van-icon name="arrow"
        /></van-button>
      </div>
    </div>

    <div>
      <div
        class="personalized-tab-wrapper"
        ref="scroll"
        @touchstart="move = false"
        @touchmove="move = true"
      >
        <div class="tab-item-swipe">
          <van-swipe
            class="swipe-content"
            :autoplay="3000"
            style="height: 300px"
            vertical
            @change="onChange"
          >
            <van-swipe-item v-for="(item, index) in swipeList" :key="index">
              <router-link class="tab-item" to="/search" tag="div">
                <div class="img-box">
                  <img :src="item.picUrl" />
                </div>
              </router-link>
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator title-box">
                {{ swipeList[current].name }}
              </div>
            </template>
          </van-swipe>
          <div>
            <i class="iconfont icon-xunhuan swipe-small-icon" />
          </div>
        </div>

        <router-link
          class="tab-item"
          to="/search"
          tag="div"
          v-for="(item, i) in otherList"
          :key="item.id"
          :data-id="i"
        >
          <div class="img-box">
            <img :src="item.picUrl" />
          </div>
          <div class="title-box">{{ item.name }}</div>
          <div class="play-count">
            <i class="iconfont icon-play play-small-icon" />
            {{ Math.round(item.playCount / 10000) }}万
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    await this.personalized(8);
  },
  data() {
    return {
      move: false,
      current: 0,
      personalizedList: [
        {
          alg: "cityLevel_unknow",
          canDislike: true,
          copywriter: "热门推荐",
          highQuality: false,
          id: 6648782637,
          name: "『神仙翻唱』翻唱比原唱好听系列",
          picUrl:
            "https://p1.music.126.net/4OZkJ0Ywiqf7cxK9A3HF4g==/109951165785255035.jpg",
          playCount: 292012,
          trackCount: 47,
          trackNumberUpdateTime: 1615107451896,
        },
      ],
    };
  },
  computed: {
    swipeList() {
      return this.personalizedList.filter((ele, i) => i < 3);
    },
    otherList() {
      return this.personalizedList.filter((ele, i) => i > 2);
    },
  },
  methods: {
    personalized(num) {
      this.$api.getPersonalized(num).then((res) => {
        if (res && res.data && res.data.code === 200) {
          this.personalizedList = res.data.result;
        }
      });
    },
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.hot {
  .hot-header {
    h3 {
      padding: 0 10px;
      font-size: 16px;
      line-height: 37.5px;
      font-weight: bold;
      display: inline-block;
    }
    .hot-header-btn {
      float: right;
      line-height: 37.5px;
      padding: 0 10px;

      .btn {
        vertical-align: middle;
      }
    }
  }
}

.personalized-tab-wrapper {
  display: flex;
  height: 155px;
  overflow-x: auto;
  overflow-y: visible;
  .tab-item-swipe {
    position: relative;
    flex-shrink: 0;
    width: 105px;
    height: 145px;

    .swipe-small-icon {
      position: absolute;
      right: 6px;
      top: 10px;
      padding: 2px 5px;
      font-size: 12px;
      color: #eee;
      border-radius: 8px;
      background: rgba(105, 77, 77, 0.3);
    }
  }
  .tab-item {
    position: relative;
    flex-shrink: 0;
    width: 100px;
    padding: 5px;
    text-align: center;
    .img-box {
      width: 100%;
      height: 100px;
      border-width: 2px;
      border-style: solid;
      border-color: transparent;
      border-top-color: #eee;
      border-radius: 7px;
      img {
        background-color: #e60025;
        width: 100px;
        height: 100px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 7px;
      }
    }
    .title-box {
      margin-top: 5px;
      font-size: 12px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .play-count {
      position: absolute;
      right: 6px;
      top: 10px;
      padding: 2px 5px;
      font-size: 12px;
      color: #eee;
      border-radius: 8px;
      background: rgba(105, 77, 77, 0.3);

      .play-small-icon {
        font-size: 10px;
        line-height: 10px;
      }
    }
  }

  .custom-indicator {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 2px 6px;
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
.personalized-tab-wrapper::-webkit-scrollbar {
  width: 0px;
  background: none;
}
</style>
