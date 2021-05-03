import {
  UPDATE
} from './mutations-types'

export default {
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
}