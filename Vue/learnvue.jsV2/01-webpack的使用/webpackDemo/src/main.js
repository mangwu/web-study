// 模块化方式编写 入口

const {add, sub} = require('./mathUitls.js')

console.log(add(2, 5));
console.log(sub(2, 5));

// 导入ES6语法模块的属性
import obj from "./info.js";

console.log(obj);

import {name} from "./info.js";
console.log(name);

// 导出全部
import * as info from "./info";
console.log(info.age);