'use strict'

// 引入文件服务器必备模块
let fs = require('fs')
let http = require('http')
let url = require('url')
let path = require('path')

// 本地文件路径
let root = path.resolve(process.argv[2] || '.')

let server = http.createServer((request, response) => {
  // 获取请求url并解析pathname
  let pathname = url.parse(request.url).pathname

  // 判断pathname
  if (pathname.indexOf('listtext.html/') !== -1 && pathname[pathname.length - 1] !== '/') {
    let s = 'listtext.html/'
    pathname = pathname.slice(0, pathname.indexOf(s)) + pathname.slice(pathname.indexOf(s) + s.length)
    console.log(pathname);
  }
  // 拼接得到文件目录在03-httpmodule下的index.js文件
  let filePath = path.join(root, 'Node.js', '03-httpmodule', pathname)
  console.log('filename:', filePath);


  // 默认文件404
  let defaults = path.join(root, 'Node.js', '03-httpmodule', 'default.html')
  // 判断文件信息
  try {
    // 获取文件信息
    let stat = fs.statSync(filePath)
    // 目录判断
    if (stat.isDirectory()) {
      console.log('Request for ', filePath, 'is directory');
      // 将'index.html/' 和 '/' 定位到'index.html' 
      if (filePath.indexOf('index.html') !== -1 || request.url === '/') {
        console.log('Request for', filePath, request.method, request.url, '200');
        response.writeHead(200)
        fs.createReadStream('./Node.js/03-httpmodule/index.html').pipe(response)
      } else if (filePath.indexOf('listtext.html') !== -1) {
        // 将 'listtext.html/' 定位到'listtext.html
        request.url = filePath.slice(0, filePath.length - 2)
        console.log('Request for', filePath, request.method, request.url, '200');
        response.writeHead(200)
        fs.createReadStream('./Node.js/03-httpmodule/listtext.html').pipe(response)
      } else {
        // 显示目录信息
        console.log('Request for', filePath, request.method, request.url, '200');
        response.writeHead(200)
        let info = fs.readdirSync(filePath)
        response.end(`<head>
        <meta charset='utf-8'>
        <title>${request.url}</title>
        </head>
        <h2>${request.url} 目录</h2>
        <p>创建时间:${stat.birthtime}</p>
        <p>修改时间:${stat.mtime}</p>
        <p>子文件或目录：${info}</p>
      `)
      }

    }
    // 获取文件资源
    if (stat.isFile()) {
      console.log('Request for', filePath, request.method, request.url, '200');
      response.writeHead(200)
      fs.createReadStream(filePath).pipe(response)
    }
  } catch (err) {
    // 没有文件或目录时打印404
    console.log(err)
    console.log('Request for ', filePath, 'no such file or directory');
    response.writeHead(404)
    console.log('404 request', request.url);
    fs.createReadStream(defaults).pipe(response)
  }

})

server.listen(8080)

console.log('Server is running in http://127.0.0.1:8080');