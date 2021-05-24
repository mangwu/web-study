'use strict'

// 引入文件系统模块
let fs = require('fs')

// 创建文件读取流
let rs = fs.createReadStream('./Node.js/02-basemodule/sample2.txt', 'utf-8')

// 读取响应事件
// data事件表示文件数据流可以开始读取了
rs.on('data', (chunk) => {
  console.log('DATA:');
  console.log(chunk);
})

// end事件表示文件数据流没了
rs.on('end', () => {
  console.log('Read Stream END.');
})
// error事件表示读取文件数据流出错
rs.on('error', (err) => {
  console.log('ERROR:', err);
})

// 写入文件流

let ws1 = fs.createWriteStream('./Node.js/02-basemodule/sample3.txt', 'utf-8');

// 引入标准输入流
const readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


setTimeout(() => {
  rl.setPrompt('通过标准输入流输入文本数据：');
  rl.prompt();


  let inputs = null;
  rl.on('line', (data) => {
    console.log('输入完成，正在通过输入文件流写入文本数据...');
    // 处理输入
    inputs = data.trim().split(' ');
    console.log('this is your inputs:', inputs);
    // 文件流写入
    for(let i of inputs) {
      ws1.write(i + '\n')
    }
    ws1.write('end')
    // 结束写入文件流
    ws1.end()
    // 结束标准输入流
    rl.close()
  })
}, 500)





