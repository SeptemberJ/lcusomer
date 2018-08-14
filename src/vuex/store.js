import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    ifSpin: false,
    isMobile:false,
    activeRoute:'首页',
    CurSiderMenu:'首页',
    open:false,
    docked: true,
    userInfo:{},
    sliderMenu:[
      {'Icon':'home','F_menu':'首页','S_menu':['波然新材共筑未来','企业核心价值']},
      {'Icon':'earth','F_menu':'关于波然','S_menu':['波然简介','企业文化','企业荣誉','人力资源','发展历程','联系我们']},
      {'Icon':'close','F_menu':'产品','S_menu':['建筑涂料','水性木器漆','水性金属漆','油墨','非金属水性漆','粘合剂','地坪涂料','防水涂料','皮革','造纸','特殊领域']},
      {'Icon':'cube','F_menu':'技术与服务','S_menu':['创新技术','意见反馈','客服热线','对外交流']},
      {'Icon':'cube','F_menu':'最新活动','S_menu':['企业新闻','行业新闻']},
      {'Icon':'cube','F_menu':'社会责任','S_menu':['环保','员工关怀','社会公益','读书专区']}
    ]
}

// 定义所需的 mutations
const mutations = {
    // [ROUTE_CHANGE](state,data){
    //   state.activeRoute = data.activeRoute
    //   state.CurSiderMenu = data.activeRoute
    // },
    TOGGLESPIN(state) {
        state.ifSpin = !state.ifSpin
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})