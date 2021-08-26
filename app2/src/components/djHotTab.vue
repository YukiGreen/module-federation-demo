<template>
  <div class="hot bg-white">
    <div class="hot-header">
      <h3>热门博客</h3>
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
        <router-link
          class="tab-item"
          to="/search"
          tag="div"
          v-for="(item, i) in djHotList"
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
    await this.getList(8);
  },
  data() {
    return {
      move: false,
      djHotList: [
        {
          id: 792544462,
          name: "四只烤翅",
          picUrl:
            "https://p1.music.126.net/Dk8SWIUBmiiutKNK3rXRYw==/109951163773467863.jpg",
          programCount: 37,
          subCount: 314616,
          createTime: 1546664883212,
          categoryId: 2001,
          category: "创作翻唱",
          rcmdtext: "四合院现场，粗粝而动人",
          radioFeeType: 0,
          feeScope: 0,
          playCount: 31491682,
          dj: {
            defaultAvatar: false,
            province: 500000,
            authStatus: 1,
            followed: false,
            avatarUrl:
              "http://p1.music.126.net/GmOFC7jIpPCM358I_fOMLw==/109951163830964130.jpg",
            accountStatus: 0,
            gender: 1,
            city: 500101,
            birthday: 813168000000,
            userId: 426366432,
            userType: 4,
            nickname: "四十只烤翅",
            signature: "",
            description: "",
            detailDescription: "",
            avatarImgId: 109951163830964130,
            backgroundImgId: 109951164017495460,
            backgroundUrl:
              "http://p1.music.126.net/hWzTM8MCymkmyIFVWWKjbQ==/109951164017495459.jpg",
            authority: 0,
            mutual: false,
            expertTags: null,
            experts: null,
            djStatus: 10,
            vipType: 0,
            remarkName: null,
            authenticationTypes: 536584,
            avatarDetail: null,
            anchor: true,
            backgroundImgIdStr: "109951164017495459",
            avatarImgIdStr: "109951163830964130",
            avatarImgId_str: "109951163830964130",
          },
          copywriter: "四合院现场，粗粝而动人",
        },
      ],
    };
  },
  methods: {
    getList(num) {
      this.$api.getDjHotList(num).then((res) => {
        if (res && res.data && res.data.code === 200) {
          this.djHotList = res.data.djRadios;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.hot {
  margin-top: 8px;
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
