import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// axios测试
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'GET'
}).then(res => {
  console.log(res);
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  // 将结构目录下的参数写入params中 get请求的参数拼接
  params: {
    type: 'sell',
    page: 1
  }
}).then(res => {
  console.log(res);
})

const baseURL = 'http://152.136.185.210:7878/api/m5'
// 2.axios发送并发请求
axios.all([axios({
  url: baseURL + "/home/multidata"
}), axios({
  url: baseURL + "/home/data",
  params: {
    type: 'sell',
    page: 3,
  }
})])
  // .then(results => {
  //   //对results数组进行处理
  //   console.log(results[0]);
  //   console.log(results[1]);
  // })
  .then(axios.spread((res1, res2) => {
    // 使用axios的spread函数拿到分离的结果
    console.log(res1);
    console.log(res2);
  }))

// 3. 使用全局配置（全局axios和配置）
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 500

axios.all([axios({
  url: "/home/multidata"
}), axios({
  url: "/home/data",
  params: {
    type: 'sell',
    page: 2,
  }
})])
  .then(axios.spread((res1, res2) => {
    // 使用axios的spread函数拿到分离的结果
    console.log(res1);
    console.log(res2);
  }))

// 4.创建axios实例
const axiosInstance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
}) 

// 请求multidata时使用这个实例
axiosInstance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
})

const axiosInstance2 = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5',
  timeout: 4000
})
axiosInstance2({
  url: 'home/data',
  params: {
    type: 'sell',
    page: 2
  }
})
.then((res) => {
  console.log(res);
})


// 5. 封装request模块
import {request, request2, request3, request4, request5} from './network/request'

request({
  url: 'home/multidata'
// 第二个参数为回调函数
}, res => {
  // res即是回调的结果
  console.log(res);
}, err => {
  console.log(err);
})

request2({
  baseConfig: {
    url: 'home/multidata'
  },
  success: res => console.log(res),
  failure: err => console.log(err)
})

request3({
  url: 'home/multidata'
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})

request4({
  url: 'home/multidata'
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})

// 拦截请求
request5({
  url: 'home/multidata'
})
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})
