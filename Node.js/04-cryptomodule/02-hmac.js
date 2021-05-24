'use strict'

// 引入加密模块
const crypto = require('crypto')

// 创建hmac对象 第一个参数表示使用的hash算法，第二个参数是密钥
const hmac = crypto.createHmac('md5', 'mangwu')

// 添加加密数据
hmac.update('mangwu')

let hexhmac = hmac.digest('hex')

console.log(hexhmac, hexhmac.length);

