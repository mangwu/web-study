//用aaa.js中的东西，导入即可 ES6语法（对象中的变量）
import {flag, sum} from "./aaa.js";

if (flag) {
  console.log('小明是天才');
  console.log(sum(20, 50));
};

// 导入aaa export直接定义的可导出变量
import {num1, height} from "./aaa.js";

if (flag) {
  console.log(num1, height);
}

// 导入 export定义的函数
import {mul, Person} from "./aaa.js";

console.log(mul(2, 10));

const p = new Person();
p.run();


// 导入default，可以自定义导入对象命名
import addr from "./aaa.js"
console.log(addr);

// 统一全部导入
import * as aaa from "./aaa.js"
// 通过aaa可以拿到一个模块中的所有导出集合
console.log(aaa.flag);