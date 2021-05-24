'use strict'

// 引入http模块
let http = require('http')

// 创建服务器
let server = http.createServer((request, response) => {
  // 获取请求方法和地址
  console.log(request.method + ":" + request.url);

  // 添加响应头
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })

  // body内容
  response.end('<h1>Hello, world!</h1>')
})

// 监听端口
server.listen(8080)

console.log('Server is running in http://127.0.0.1:8080/');