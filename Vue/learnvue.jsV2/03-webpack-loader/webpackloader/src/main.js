// 使用ES6语法
import * as aaa from "./js/aaa.js";

console.log(aaa.person.age);

// 依赖css文件 使用commonJS语法
require('./css/normal.css');

// 依赖less文件，使用commonJS语法
require('./css/special.less');

// 测试less是否生效
document.writeln('<h2>你好啊!</h2>')