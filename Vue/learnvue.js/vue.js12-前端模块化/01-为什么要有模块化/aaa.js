// 全局里有小明想要导出的东西
var moduleA = (function() {
  // ES6设置导出对象
  var obj = {};

  var name = 'mangwu'
  var flag = true

  if (flag) {
    console.log(name);
  }

  function sum(num1, num2) {
    return num1 + num2
  } 

  obj.flag = flag;
  obj.sum = sum;

  // 返回模块 导出
  return obj

})();

// 使用commenJS导出
var name = 'mangwu'
var flag = true

if (flag) {
  console.log(name);
}

function sum(num1, num2) {
  return num1 + num2
} 

// 导出结构，需要有底层支撑（Webpack依赖node.js环境，node.js能支撑这种导出结构
module.expots = {
  flag,
  sum,
}
