/**
 * Created by jessietang on 2017/11/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { storage } from '../assets/js/common/index'


Vue.use(Vuex)

const state = {
  // 侧边栏状态
  sidebar: {
    //opened: !storage.session.get('sidebarStatus')
    opened: true
  },

  breadListState:[
    {name:'首页',path:'/home/survey'}
  ]
};

const getters = {
  breadListState(){
    return JSON.parse(sessionStorage.getItem('breadListStorage')) || state.breadListState;
  }
};

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    /*if (state.sidebar.opened) { // true
      storage.session.set('sidebarStatus', 1)
    } else {
      storage.session.set('sidebarStatus', 0)
    }*/
    // 重新设置state
    //alert(storage.session.get('sidebarStatus')); // 1
    //alert(state.sidebar.opened); // true
    state.sidebar.opened = !state.sidebar.opened;
    //alert(state.sidebar.opened); // false
  },

  breadListStateAdd(state,obj){
    state.breadListState.push(obj);
  },
  breadListStateRemove(state,num){
    state.breadListState.splice(num,state.breadListState.length-num);
  },
  breadListMutations(getters,list){
    getters.breadListState=list;
    sessionStorage.setItem('breadListStorage',list);
  }
};

const actions = {
  toggleSideBar: ({commit}) => {
    commit('TOGGLE_SIDEBAR')
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
