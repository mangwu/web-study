// node包里面的东西，需要初始化才有path包
const path = require('path')

module.exports = {
  // 开发模式：生产模式或者开发模式
  mode: "development",
  // 入口
  entry: __dirname + '/src/main.js',
  // 出口 写入一个对象
  output: {
    // 出口路径 动态获取路径 __dirname上下文的全局变量，保存当前文件所在路径
    path: path.resolve(__dirname, 'dist'),
    // 文件名 bundle打包，
    filename: 'bundle.js'
  },
}