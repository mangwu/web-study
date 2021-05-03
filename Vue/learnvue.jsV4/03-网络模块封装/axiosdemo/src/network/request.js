// 封装http请求
// 为每个实例创建一个函数用于发送网络请求
import axios from 'axios'
export function request(config, success, failure) {
  // 创建实例
  const axiosInstance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 3000
  })

  // 实例发送网络请求/返回结构和异常
  axiosInstance(config)
    .then((res) => {
      success(res)
    })
    .catch((err) => {
      failure(err)
    })
}

// 更加灵活的一种用法
export function request2(config) {
  // 创建实例
  const axiosInstance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 3000
  })

  // 实例发送网络请求/返回结构和异常
  axiosInstance(config.baseConfig)
    .then((res) => {
      config.success(res)
    })
    .catch((err) => {
      config.failure(err)
    })
}

// 返回Promise的方案
export function request3(config) {
  // axios是异步操作，封装返回一个promise
  return new Promise((resovle, reject) => {
    // 创建实例
    const axiosInstance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 3000
    })

    // 通过resolve和reject调用
    axiosInstance(config)
      .then((res) => {
        resovle(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
// 最终方案 直接返回axiosPromise
export function request4(config) {
  const axiosInstance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 3000
  })
  return axiosInstance(config)
}

// axios拦截器
export function request5(config) {
  const axiosInstance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 2000
  })
  // 实例拦截器
  axiosInstance.interceptors.request.use(config => {
    // 请求成功
    console.log(config);
    // 拦截作用
    // 1. 修改增加config信息，如header等
    // 2. 请求时间段show一个请求正在进行的图标
    // 3. 某些网络请求是必须携带一些特殊信息（token)，如登录时没有token需要给用户提示登录,并跳转登录
    return config
  }, err => {
    // 请求失败
    console.log(err);
    return err
  })

  axiosInstance.interceptors.response.use(res => {
    // 响应成功
    console.log(res.data)
    return res.data
  }, err => {
    console.log(err);
    return err
  })
  return axiosInstance(config)
}

