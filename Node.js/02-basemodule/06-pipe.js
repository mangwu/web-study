'use strict'

let fs = require('fs');

let stream = require('stream')

// 打开读取文件流
let rs = fs.createReadStream('./Node.js/02-basemodule/sample4.txt', 'utf-8')

// 打开写文件流
let ws = fs.createWriteStream('./Node.js/02-basemodule/output2.txt')
console.log('连接文件流');




// rs.pipe(ws)
rs.pipe(ws, { end: false })

// 异步执行
setTimeout(() => {
  ws.write('设置管道不自动关闭写入文件流，继续写入数据\n')
  ws.write(Buffer.from('使用buffer写入二机制数据', 'utf-8'))
  ws.end()
}, 10)


// ws.end()
setTimeout(() => {
  try {
    let stat = fs.statSync('./Node.js/02-basemodule/output2.txt')

    if (stat.isFile()) {
      console.log('isFile:', stat.isFile());
      console.log('size:', stat.size);
      console.log('createTime:', stat.ctime);
      console.log('LastmodefinedTime', stat.mtime);
    }
  } catch (err) {
    console.log(err);
  }
}, 1000)




