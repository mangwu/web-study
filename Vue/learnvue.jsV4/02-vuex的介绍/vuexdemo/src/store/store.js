// import { reject, resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

// 将mutation-types进行封装，防止字符串写错
import {
  INCREMENT,
  UPDATE
} from './mutations-types'
// 1.安装插件
Vue.use(Vuex)

// 2. 创建对象
const moduleA = {
  state: {
    name: 'moduleA'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload.name
    }
  },
  getters: {
    fullName(state) {
      return state.name + '1111'
    },
    fullName2(state, getters, rootState) {
      return getters.fullName + rootState.counter
    }
  },
  actions: {
    asyncUpdateName(context, payload) {
      return new Promise((resolve) => {
        setTimeout(()=> {
          console.log(context);
          context.commit({
            type: 'updateName',
            name: payload.name
          })
          resolve(payload.completed)
        }, 1000)
      })
      
    }
  }
}
const store = new Vuex.Store({
  // Store 仓库类
  // 状态对象 保存状态
  state: {
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
  },
  // 定义同步的状态处理方法
  mutations: {
    // 方法,自动传入state
    // ['string']定义一个函数
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      // 普通方法（载荷）获得的参数用法
      // state.counter += count
      // 对象提交风格获得的参数
      console.log(payload);
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
      state.info.name = stu.name
      state.info['address'] = '洛杉矶'
      delete state.info.age
    },
    [UPDATE](state, payload) {
      // devtools不会捕捉这个 错误代码
      // setTimeout(()=> {
      //   
      // }, 1000)
      state.info.name = payload.name
      // console.log('store: UPDATE');
    }

  },
  // 定义异步的状态处理方法
  actions: {
    // context 上下文
    asyncUpdateInfo(context, payload) {
      // 对异步操作进行封装
      return new Promise((resolve) => {
        setTimeout(()=> {
          // 使用Mutation操作
          context.commit({
            type: UPDATE,
            name: payload.name
          })
          resolve(payload.completed)
        }, 1000)
      })
    }    
  },
  // 定义处理后的状态数据（相当于预处理）
  getters: {
    powerCounter(state) {
      return state.counter ** 2
    },
    more20Stu(state) {
      // 学生状态中大于20的 当其他组件也如此需要时需要重复
      return state.students.filter(s => s.age >= 20)
    },
    // 添加参数
    more20StuLength(state, getters) {
      return getters.more20Stu.length
    },
    moreAgeStu: state => age => state.students.filter(s => s.age >= age),
    
  },
  modules: {
    // 在当store比较臃肿的时候，允许将store分割成模块，每个模块与一个store的功能类似（但仍然只有一个store）
    a: moduleA
  }
})

// 3. 导出Store对象

export default store