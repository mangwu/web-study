## HTMLPlugin

## uglifyjs-webpack-plugin

+ 对js文件进行丑化
+ 丑化后的文件体积更小，相当于压缩功能

### 安装

```shell
npm install uglifyjs-webpack-plugin --save-dev
```

#### 配置

[官方文档](https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin/)

以下方式还是传统方式，声明插件，然后再plugins中new注册

```
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归mangwu所有'),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new UglifyjsWebpackPlugin()
  ],
```

