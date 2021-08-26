import Vue from "vue";
import Vuex from "vuex";
import HelloService from '../api';

Vue.use(Vuex);

export const options = {
  state: {
    listData: [],
  loading: true,
  helloName: 'Hello friend'
  },
  getters: {
    getUserNum(state) {
      return state.listData.length;
    },
    getList(state) {
      console.log(state.listData);
      return state.listData;
    },
  },
  mutations: {
    SET_HELLO_DATA(state, data) {
      state.listData = data;
      console.log(state.listData);
    },
    SET_HELLO_LOADING(state, flag) {
      state.loading = flag;
    },
    SET_HELLO_NAME(state, name) {
      state.helloName = name;
    },
  },
  actions: {
    async getUsers(context) {
      context.state.loading = true;
      try {
        const res = await HelloService.getList();
        console.log(res, res.data.code, res.data.data);
        if (res && res.data.code === 200 && res.data.data) {
          context.commit('SET_HELLO_DATA', res.data.data);
        }
        context.commit('SET_HELLO_LOADING', false);
      } catch (e) {
        context.commit('SET_HELLO_LOADING', false);
      }
    },
  },
  modules: {}
};

export default new Vuex.Store(options);

