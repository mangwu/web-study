import Vue from 'vue'
import App from './App.vue'
// 自动找index.js文件
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 打印出index.js new出来的router实例
// console.log(router);
