// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function(createElement) {
    // 1.普通用法创建标签，用于替换el的挂载元素
    // createElement('h2', {class: 'box}, [''])
    // createElement('标签', {标签属性键值}, [内容])
    return createElement('h2', {class: 'box'}, ['hello, world'])
    // 2.传入组件对象
    // return createElement(App)
  }
})
