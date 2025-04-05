// 引入Vue Vuex
import Vue from "vue";
import Vuex from "vuex";
// s使用Vuex插件
Vue.use(Vuex);

// 定义store中的actions——响应组件的动作
const actions = {
  addOdd(context, value) {
    context.commit('ADD', context.state.sum % 2 === 0 ? 0 : value);
  }
};
// 定义store中的mutations——操作数据
const mutations = {
  ADD(state, value) {
    state.sum += value;
  },
  MINUS(state, value) {
    state.sum -= value;
  }
};
// 定义store中的state——定义数据
const state = {
  sum: 0
};
// 定义store中的getters——用于将state中的数据进行加工
const getters = {
  binarySum(state) {
    return state.sum.toString(2);
  }
};

// 定义并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
});
