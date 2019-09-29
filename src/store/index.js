import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    backRouter: 0,
    moduleAlert: true,
    headerZindex: 0,
    submitAccess: true,
    indexCollectChange: 1,
    loginUser: '15620627033',
    eventTrigger: 1,
    tabHeader: {
      leftBtn: '返回',
      title: '首页',
      backUrl: '',
      rightBtn: {
        url: '',
        title: '我的'
      }
    },
    scroll: {
      home: 0
    }
  }
})
