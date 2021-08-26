<template>
  <div id="wrap">
    <!-- 歌曲信息 -->
    <div class="songInfo">
      <h3 class="name">听妈妈的话</h3>
      <div class="singer">周杰伦</div>
      <!-- <div class="album">依然范特西</div> -->
    </div>
    <!-- 歌曲图片 -->
    <div class="songImg">
      <img :src="musicInfo.imageUrl" alt="">
    </div>

    

    <!-- 进度条 -->
    <div class="progress">
      <div class="curTime">00:00</div>
      <div class="drag">
        <div class="circle"></div>
        <div class="frontBg"></div>
        <div class="backBg"></div>
      </div>
      <div class="totalTime">00:00</div>
    </div>

    <!-- 底部菜单 -->
    <ul class="control">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <!-- 弹出列表 -->
    <!-- <div class="list">
            <dl>
                <dt>播放列表</dt>
                <dd>听妈妈的话</dd>
                <dd>听妈妈的话</dd>
                <dd>听妈妈的话</dd>
            </dl>
            <div class="close">关闭</div>
        </div> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  async created() {
    await this.getSongUrl();
  },
  data() {
    return {
      move: false,
      songInfoList: [
        {
          id: 1868874994,
          url: "http://m801.music.126.net/20210821213801/21ae57b0fe31353720a9611435fc5ea0/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/10295849120/905a/d5bf/20ca/ab6a6615fe18156657f36843cfd57182.mp3",
          br: 128002,
          size: 3826460,
          md5: "ab6a6615fe18156657f36843cfd57182",
          code: 200,
          expi: 1200,
          type: "mp3",
          gain: 0,
          fee: 8,
          uf: null,
          payed: 0,
          flag: 64,
          canExtend: false,
          freeTrialInfo: null,
          level: null,
          encodeType: null,
          freeTrialPrivilege: {
            resConsumable: false,
            userConsumable: false,
          },
          freeTimeTrialPrivilege: {
            resConsumable: false,
            userConsumable: false,
            type: 0,
            remainTime: 0,
          },
          urlSource: 0,
        },
      ],
    };
  },
  computed: {
    ...mapState({
      songId: (state) => state.songId,
      songIds: (state) => state.songIds,
      musicList: (state) => state.musicList,
    }),
    musicInfo() {
      console.log(this.musicList, this.songId);
      return this.musicList.filter(ele => ele.targetId === this.songId)[0] || [{}];
    },
    badge() {
      return "1";
    },
  },
  methods: {
    getSongUrl() {
      this.$api.getSongUrl(this.songIds.join(',')).then((res) => {
        if (res && res.data && res.data.code === 200) {
          this.songInfoList = res.data.data;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
