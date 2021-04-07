# loader

#### webpack开发

+ 不仅有基本js代码
+ 也要处理css，图片，typescript，scss， less，vue等
+ 只执行webpack不具备转化这些东西

### 扩充

使用loader扩充webpack

```shell
# 通过npm安装相应loader
npm install --save-dev css-loader
```

+ 在webpack官网有大部分loader
+ 下载后在webpack.config.js中配置文件即可

```
module.exports = {
	module: {
	 rules: {
	 	……
	 }
	}
}
```

#### css-loader只负责加载css文件

+ 不负责解析
+ 使用style-loader解析

#### 在webpack.config.js中配置时的rules

```js
rules: [
      {
          // 正则表达式 匹配css文件
        test: /\.css$/i,
          // css-loader只负责将CSS文件进行加载
          // style-loader负责将样式添加到DOM中
          // use表示应用，读取时从右向左顺序要对
        use: ['style-loader', 'css-loader'],
      },
    ],
```

### 其他

+ less

  + ```console
    npm install less less-loader --save-dev
    ```

  + 注意在webpack.config.js中添加规则时额外添加

  + ```
    rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.less$/i,
            use: [
              {
                loader: "style-loader",
              },
              {
                loader: "css-loader",
              },
              {
                loader: "less-loader",
              },
            ]
          },
        ],
    ```

    

+ scss

+ stylus

#### 加载文件

+ ##### url-loader

+ ```shell
  npm install url-loader --save-dev
  ```

+ 配置

+ ```js
  {
      test: /\.(png|jpg|gif|jpeg)$/i,
          use: [
              {
                  loader: 'url-loader',
                  options: {
                      limit: 81920,
                  },
              },
          ],
  },
  ```

  + url('image.jpg')

    + 真实开发中对图片名字可能有要求

    + ```js
      name: 'img/[name].[hash:8].[ext]'
      // name原来图片的名称
      // hash:8 8位hash
      // ext后缀
      // 写在options里面
  ```
      
    
  
+ 将jpg图片转化为base64字符串，然后显示
  
+ ##### 当加载的图片小于limit时，url-loader会将图片编译成base64的字符串然后使用
  
+ ##### 当加载图片大于limit时，会报错，不能找到file模块,会找file-loader进行展示
  
+ file-loader安装

+ ```shell
  npm install file-loader --save-dev
  ```

+ 可以直接使用，不需要添加新rule

+ ##### 但是可能产生路径错误，因为url中的图片地址为dist中打包的地址

+ ```
  output: {
      path: __dirname + '/dist/',
      filename: 'bundle.js',
      publicPath: 'dist/'
    },
  ```




### 浏览器兼容问题

+ ie浏览器等老旧浏览器不支持ES6语法

+ 使用babel-loader将ES6转化位ES5语法

+ ```shell
  npm install -D babel-loader @babel/core @babel/preset-env webpack
  ```

+ 配置webpack.config.js

```js
{
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
       loader: 'babel-loader',
       options: {
         presets: ['@babel/preset-env']
       }
    }
},
```



