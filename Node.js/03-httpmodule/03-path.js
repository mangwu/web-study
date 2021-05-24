'use strict'

let path = require('path')

// 返回当前路径
let currentPath = path.resolve('.')

// 拼接路径,得到文件路径
let filePath = path.join(currentPath, 'Node.js', '03-httpmodule', '03-path.js')

console.log(currentPath);
console.log(filePath);