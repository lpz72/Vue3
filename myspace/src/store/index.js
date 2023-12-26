import { createStore } from 'vuex'
import ModuleUser from './user'

export default createStore({
  state: {
    //用于存储一些对象信息
    /*
    user: {
        id: "",
        username: "",
        firstname: "",
        lastname: "",
        followCount: 0,

    },
    */

  },
  getters: {
    //存储一些需要计算的，如：
    /*
    fullName(state){
      return state.user.firstname + state.user.lastname;
    }

    */

  },
  mutations: {
      //用于存储state.什么什么,即堆state的修改操作
      /*
      updateUser(state,user){
        state.user.username = user.username;
      }
      */
  },
  actions: {
    //可实现异步操作，如从云端获取数据，一个完整的复杂的修改可以放在actions里，对每个state单独的修改放到mutations
  },
  modules: {
    //对state里的对象进行分割，state里可能会有多个类
    user:ModuleUser,
  }
});
