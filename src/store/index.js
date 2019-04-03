import Vue from 'vue'
import Vuex from 'Vuex'
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

const state = {
    test:"这是一个测试",
    showdata:"这是一个展示数据",
    count:0,
    products:[],
  };
  
  export default new Vuex.Store({
    state,
    mutations,
    actions
  });