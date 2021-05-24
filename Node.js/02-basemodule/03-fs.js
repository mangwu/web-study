'use strict';

let fs = require('fs')

// 异步读取图片
fs.readFile('./Node.js/02-basemodule/知乎.jpg', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log('----------异步读取图片--------------')
    console.log(typeof (data))
    console.log(data)
    console.log(data.length + 'bytes')
    // console.log(data.toString('utf-8'));
  }
})

// 异步读取文本
fs.readFile('./Node.js/02-basemodule/sample.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log('----------异步读取文本--------------')
    console.log('"' + typeof (data))
    console.log(data + '"')
    let buf = Buffer.from(data, 'utf-8')
    console.log(buf);
  }
})

// 同步读取文件
try {
  let data = fs.readFileSync('./Node.js/02-basemodule/sample.txt', 'utf-8')
  console.log('----------同步读取文件--------------')
  console.log('"' + data + '"')
} catch (err) {
  console.log(err)
}

// 异步写文件
setImmediate(()=> {
  let data = "Hello, Node.js\nSecond Para"
  fs.writeFile('./Node.js/02-basemodule/output.txt', data, (err) => {
    console.log('----------异步写文件--------------');
    if (err) {
      console.log(err);
    } else {
      console.log('output.txt: ok.')
    }
  })
})


// 同步写文件
let data2 = "Sync wirteFile\n123456789\n123456789\n123456789"

try {
  fs.writeFileSync('./Node.js/02-basemodule/output.txt', data2)
  console.log('----------同步写文件--------------');
  console.log('ok.');
} catch(err) {
  console.log(err);
}

// 异步读取文件信息
fs.stat('./Node.js/02-basemodule/output.txt', (err, stat) => {
  if (err) {
    console.log(err)
  } else {
    console.log('----------异步文件信息读取打印--------------')
    // 是否是文件
    console.log('isFile:', stat.isFile())
    // 是否是目录
    console.log('isDirectory:', stat.isDirectory());
    // 是文件就打印相关信息
    if (stat.isFile()) {
      // 文件名
      console.log('文件名：', 'output.txt');
      // 文件大小
      console.log('文件大小：', stat.size);
      // 文件创建时间
      console.log('文件创建时间：', stat.birthtime);
      // 文件修改时间
      console.log('文件修改时间：', stat.mtime);
    }
  }
})

// 同步获取文件信息
try {
  let stat = fs.statSync('./Node.js/02-basemodule/output.txt');
  console.log('----------同步文件信息读取打印--------------');
  // 是否是文件
  console.log('isFile:', stat.isFile())
  // 是否是目录
  console.log('isDirectory:', stat.isDirectory());
  // 是文件就打印相关信息
  if (stat.isFile()) {
    // 文件名
    console.log('文件名：', 'output.txt');
    // 文件大小
    console.log('文件大小：', stat.size);
    // 文件创建时间
    console.log('文件创建时间：', stat.birthtime);
    // 文件修改时间
    console.log('文件修改时间：', stat.mtime);
  }
} catch(err) {
  console.log(err)
}



