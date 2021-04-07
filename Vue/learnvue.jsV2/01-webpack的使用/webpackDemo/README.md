# 初始化项目

```
npm init
```

```shell
name: (webpackDemo) // 项目名称
version: (1.0.0) // 版本号
description: // 项目的描述
entry point: (index.js) // 入口文件
test command: // 测试命令
git repository: // git仓库
keywords: // 关键字
author: // 作者创始人
 license: (ISC) //许可:(ISC)
About to write to C:\Users\Administrator\Desktop\webpackDemo\package.json:

{
  "name": "webpackdemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this ok? (yes) // 这里直接输入yes就可以了
```

# 安装webpack依赖包

1. 一般格式

```shell
npm install webpack@xx -g
# 全局安装 @版本号
npm install webpack@xx --save-dev
# 局部安装 @版本号
```

2. 安装最新版本 局部安装

```shell
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

3. 安装指定版本 局部安装

```shell
npm install webpack@3.6 --save-dev
# 3.6版本
npm install webpack@4 --save-dev
npm install webpack@4 webpack-cli --save-dev
```

4. 卸载

```shell
npm uninstall webpack@xx
npm uninstall webpack@xx webpack-cli
```



# 打包入口

### webpack2(Webpack3.x)

```shell
webpack ./src/main.js ./dist/bundle.js
```

+ 其他依赖会自动打包

#### 注意如果使用局部包



### webpack3(Webpack4.x, webpack5.x)

```
webpack ./src/main.js -o ./dist/bundle.js
```

+ webpack4打包需要指定打包为开发环境还是生产环境，没有指定mode就会出现这种黄色警告
+ 没有-o就会出现错误，因为这是webpack2的打包命令

# 配置webpack.config.js

方标直接使用webpack

```js
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
```

+ 局部配置直接使用

+ ```shell
  .\node_modules\.bin\webpack
  ```

  