'use strict'

// 引入加密和哈希算法模块
const crypto = require('crypto')


// 创建hash对象
let hash = crypto.createHash('md5');

// 输入加密数据
hash.update('Hello, world!')
hash.update('Hello, nodejs!')

// 数据'Hello, world!Hello, nodejs!'的加密16进制字符串
console.log(hash.digest('hex'));

// sha1算法的hash对象
let hash2 = crypto.createHash('sha1')

hash2.update('mangwu')
console.log(hash2.digest('hex'));

// sha256
let hash3 = crypto.createHash('sha256')

hash3.update('mangwu')
let sha256mangwu = hash3.digest('hex')
console.log(sha256mangwu, sha256mangwu.length);



