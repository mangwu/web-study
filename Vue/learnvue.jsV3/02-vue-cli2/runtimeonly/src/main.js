import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 箭头函数的完整版
  render: function(h) {
    return h(App)
  }
})
