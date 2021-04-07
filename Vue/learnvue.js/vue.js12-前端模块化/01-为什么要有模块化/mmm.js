(function () {
  // ES6自带的模块化 接收模块对象 (导入)
  if (moduleA.flag) {
    console.log('小明是个天才');
  }
  
  // 使用flag

  // 使用sum函数
})()

// 用aaa.js中的导入
let {flag, sum} = require('./aaa.js')
