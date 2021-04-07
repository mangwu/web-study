// webpack2的配置
// module.exports = {
//   entry:  __dirname + "/src/main.js", // 之前提到的唯一入口文件
//   output: {
//       path: __dirname + "/commo", // 打包后的文件存放的地方
//       filename: "index.js" // 打包后输出文件的文件名
//   }
// }
// webpack4的配置
module.exports = {
  // webpack4需要添加这个配置，development为开发环境，production为生产环境
  mode: "development",
  entry:  __dirname + "/src/main.js", // 之前提到的唯一入口文件
  output: {
      path: __dirname + "/dist", // 打包后的文件存放的地方
      filename: "bundle.js" // 打包后输出文件的文件名
  }
}