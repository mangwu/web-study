# 搭建本地服务器

使用webpack-dev-server模块

+ 把编译的东西放入内存
+ 服务于dist文件夹
+ 开发时基于内存
+ 热更新的
+ 基于node.js搭建，内部使用express框架

### 安装

```
npm install webpack-dev-server --save-dev
```

[官方网址](https://github.com/webpack/webpack-dev-server)

[webpack官方配置网址](https://webpack.docschina.org/configuration/dev-server/#root)

### webpack.config.js配置

```js
var path = require('path'); 
devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
```

+ contentBase:服务的文件夹
+ port端口号
+ compress：实时更新
+ historyApiFallback: SPA页面，依赖HTML5history模式

### 运行服务器

```shell
webpack-dev-server
```

+ 默认全局找
+ 但是局部安装了
+ 需要使用局部安装的

#### 上述方法可能产生错误

使用官网上的方法[usage-via-cli](https://webpack.docschina.org/configuration/dev-server/#usage-via-cli)

你可以通过 CLI 调用 webpack-dev-server，方式是：

```bash
npx webpack serve
```

CLI 配置项列表可以在 [这里](https://github.com/webpack/webpack-cli/blob/master/SERVE-OPTIONS.md) 查询。

#### package中设置

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev": "npx webpack serve --open"
  },
```

+ 自动打开网页

+ 开发阶段不建议使用丑化

+ ```js
  plugins: [
      new VueLoaderPlugin(),
      new webpack.BannerPlugin('最终版权归mangwu所有'),
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      // new UglifyjsWebpackPlugin()
    ],
  ```

  

+ 运行阶段不需要devServer

+ ```js
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
  ```

  

## 开发和发布要用的东西进行分离

+ 开发模式
  + 开发时依赖一个配置文件
+ 生产模式
  + 发布时又依赖一个配置文件

