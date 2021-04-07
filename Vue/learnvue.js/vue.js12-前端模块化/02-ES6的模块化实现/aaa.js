// author: 小明

// 通过模块化思想开发

let name = '小明'
let age = 18
let flag = true

function sum(num1, num2) {
  return num1 + num2
};

if (flag) {
  console.log(sum(20, 30))
};
  

// 模块化后的js文件中的函数和属性不能被别人使用(type="module")
// 导出属性和方法就可以让别人使用
// ES6语法 导出方式一 
export {
  flag,
  sum,
  name,
  age
}

// ES6语法 导出方式二
export let num1 = 1000;
export let height = 1.88;

// ES6语法 导出方式三 导出函数和类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

// export default 用于给导入者自定义命名
const address = '北京市';
// 只能有一个default
export default address;
