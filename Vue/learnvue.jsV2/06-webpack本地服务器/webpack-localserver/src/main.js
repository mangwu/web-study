// 使用ES6语法
import * as aaa from "./js/aaa.js";

console.log(aaa.person.age);

// 依赖css文件 使用commonJS语法
require('./css/normal.css');

// 依赖less文件，使用commonJS语法
require('./css/special.less');

// 测试less是否生效
document.writeln('<h2>你好啊!</h2>')

// 使用vue进行开发
import Vue from 'vue';

// import App from './vue/app'
// 在vue文件中抽取模块 但是无法加载，因为vue文件需要loader
import App from './vue/App.vue'

// runtime-only报错 须配置
new Vue({
  el: '#app',
  // 抽取到外面
  template: '<App></App>',
  // 抽取到外面
  data: {},
  components: {
    // 注册组件
    App
  }
})