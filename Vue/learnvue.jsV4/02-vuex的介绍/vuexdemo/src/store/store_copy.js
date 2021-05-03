import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'
// 1.安装插件
Vue.use(Vuex)

// 2. 创建对象
const state = {
  counter: 1000,
  students: [
    {id: 110, name: 'why', age: 18},
    {id: 111, name: 'jack', age: 24},
    {id: 112, name: 'alice', age: 30},
    {id: 113, name: 'bob', age: 19},
    {id: 114, name: 'kobe', age: 10},

  ],
  // 已经初始化的数据，vuex(watch)会观察这些信息的变化
  info: {
    name: 'mangwu',
    age: 21,
    height: 1.98
  }
}
const store = new Vuex.Store({
  // Store 仓库类
  // 状态对象 保存状态
  state,
  // 定义同步的状态处理方法
  mutations,
  // 定义异步的状态处理方法
  actions,
  // 定义处理后的状态数据（相当于预处理）
  getters,
  modules: {
    // 在当store比较臃肿的时候，允许将store分割成模块，每个模块与一个store的功能类似（但仍然只有一个store）
    a: moduleA
  }
})

// 3. 导出Store对象

export default store