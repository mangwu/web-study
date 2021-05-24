'use strict'

const crypto = require('crypto')

function aesEncrypt(data, key) {
  let cipher = crypto.createCipher('aes192', key)
  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}



function aesDecrypt(encrypted, key) {
  let decipher = crypto.createDecipher('aes192', key)

  let decrypted = decipher.update(encrypted, 'hex', 'utf-8')
  decrypted += decipher.final('utf-8')
  return decrypted
}
console.log('明文: mangwu', ' 密钥:123456');
let desmangwu = aesEncrypt('mangwu', '123456')
console.log('aes192加密：', desmangwu);

let mangwu = aesDecrypt(desmangwu, '123456')
console.log('aes192解密：', mangwu);
