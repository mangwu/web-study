// 将mutation-types进行封装，防止字符串写错
import {
  INCREMENT,
  UPDATE
} from './mutations-types'

export default {
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

}