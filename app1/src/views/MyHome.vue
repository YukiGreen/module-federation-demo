<template>
  <div>
    <div v-loading="loading" class="user-header">
      <span>User Number:</span>
      <span>{{ getUserNum }}</span>
    </div>
    <el-table :data="getList" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="名字" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="showEditHello(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <hello-edit-dialog
      v-if="showHelloEditDialog"
      :visible.sync="showHelloEditDialog"
      :form="rowInfo"
    />
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import HelloEditDialog from '../components/helloEditDialog.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      rowInfo: {
        date: '',
        name: '',
        address: ''
      },
      showHelloEditDialog: false,
    }
  },
  components: {
    HelloEditDialog,
  },
  computed: {
    ...mapState(['loading']),
    ...mapGetters(['getList', 'getUserNum']),
  },
  methods: {
    ...mapActions(['getUsers']),
    showEditHello (row) {
      this.rowInfo = row;
      this.showHelloEditDialog = true;
    }
  },
  mounted () {
    console.log('app-this1', this);
    // 查询列表数据
    this.getUsers();
  }
}
</script>