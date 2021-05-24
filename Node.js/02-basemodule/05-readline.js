// 引入标准输入流
let readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.setPrompt('通过标准输入流输入文本数据：');
rl.prompt();


let inputs = null;
rl.on('line', (data) => {
  console.log('输入完成，正在通过输入文件流写入文本数据...');
  inputs = data.trim().split(' ');
  console.log('this is your inputs:', inputs.reduce((p, n) => p + ' ' + n), '');
  rl.close()
})