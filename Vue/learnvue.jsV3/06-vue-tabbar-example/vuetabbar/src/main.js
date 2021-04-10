import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


// 导入基础样式 一般在App中显示
// require('./assets/css/base-style.css')
