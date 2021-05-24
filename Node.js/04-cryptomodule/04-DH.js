'use strict'

// 引入crypto
const crypto = require('crypto')

// Alice规定素数长度和底数g
let prime_length = 512
let g = 5

// 创建alice的迪菲赫尔曼密钥建立算法对象
let alice = crypto.createDiffieHellman(prime_length, g)

// 生成公钥私钥对
let alice_keys = alice.generateKeys()

// 获取alice的密钥建立算法随机选择的素数
let prime = alice.getPrime()

// 获取alice的底数
let generator = alice.getGenerator()

// 获取alice的私钥
let alice_private_key = alice.getPrivateKey()

// 打印alice的相关信息
console.log('-----------alice-----------');
console.log('素数:', prime.toString('hex'));
console.log('底数：', generator.toString('hex'));
console.log('私钥：', alice_private_key.toString('hex'));
console.log('公钥：', alice_keys.toString('hex'));


// 创建bob的密钥建立算法对象
let bob = crypto.createDiffieHellman(prime, generator)

// 生成bob的私钥公钥对
let bob_keys = bob.generateKeys()

// 获取bob的私钥
let bob_private_key = bob.getPrivateKey()

// 打印bob的相关信息
console.log('----------bob-----------');
console.log('素数：', bob.getPrime().toString('hex'));
console.log('底数：', bob.getGenerator().toString('hex'));
console.log('私钥：', bob_private_key.toString('hex'));
console.log('公钥：', bob_keys.toString('hex'));

// 生成密钥
let alice_secret = alice.computeSecret(bob_keys)
let bob_secret = bob.computeSecret(alice_keys)

// 密钥打印
console.log('------------双方密钥公开---------');
console.log('alice的密钥：', alice_secret.toString('hex'));
console.log('bob的密钥：', bob_secret.toString('hex'));
// console.log(alice_secret === bob_secret.toString('hex'));
