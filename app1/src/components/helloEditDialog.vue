<template>
  <el-dialog
    :visible.sync="visible"
    title="编辑用户信息"
    width="1200px"
    destroy-on-close
    @close="resetForm"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="date">
        <el-input v-model="form.date"></el-input>
      </el-form-item>
      <el-form-item label="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="address">
        <el-input v-model="form.address"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="onSubmit">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    form: {
      type: Object, default: {
        date: '',
        name: '',
        address: ''
      }
    }
  },
  data () {
    return {
    };
  },
  methods: {
    onSubmit () {
      this.$emit('update:visible', false);
    },
    resetForm () {
      this.$$emit('update:visible', false);
    }
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
