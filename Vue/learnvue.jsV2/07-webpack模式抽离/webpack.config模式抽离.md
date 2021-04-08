## 开发和发布要用的东西进行分离

+ 开发模式
  + 开发时依赖一个配置文件
+ 生产模式
  + 发布时又依赖一个配置文件

+ 公共配置
  + 开发和依赖都需要的配置文件



## 抽离

+ 新建一个build文件夹，存放配置文件

+ #### 创建base.config.js

  + 开发时和生产时都依赖的一些东西

+ #### 创建prod.config.js

  + 生产时依赖
  + 删除base里有的

+ #### 创建dev.config.js

  + 开发时依赖
  + 删除base里有的

##### 编译时需要：base.config,js + prod.config.js

##### 开发时需要: base.config.js + dev.config.js

### 配置文件合并

安装merge包

```shell
npm install webpack-merge
```

#### prod.config.js + base.config.js

```js
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  plugins: [
    new UglifyjsWebpackPlugin()
  ],
})
```

#### dev.config.js + base.config.js

```
let path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
})
```

### 在package中指定配置文件位置

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config ./build/prod.config.js",
    "dev": "npx webpack serve --open --config ./build/dev.config.js"
  },
```

+ 手动指定
+ 默认找webpack.config.js文件

### 由于更新，可以根据官方文档进行配置

[官方文档](https://webpack.docschina.org/guides/production/#setup)

