# 安装vue的三种方式

#### 1. 直接下载

#### 2. CDN引入

#### 3. NPM安装

+ 把Vue当成模块安装

+ ```js
  import Vue from 'vue'
  ```

+ 可以直接引用的原因

+ ```
  // vue模块中导出了一个vue模块
  export default vue;
  ```

  

## 安装

运行时也需要依赖，不要加-dev

```shell
npm install vue --save
```



### vue的两种版本

#### 1.runtime-only: 不可以有任何template

#### 2. runtime-compiler: 代码中可以有template

在webpack.config.js中配置别名

```js
resolve: {
    //alias 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js', 
    }
  }
```

+ 当import Vue from 'vue'时，

+ 看一下vue指向的文件使用的环境默认为

+ ```shell
  node_modules/vue/dist/vue.runtime.js
  ```

  这种环境就是runtime-only环境，

+ 需要指定别名使用

  ```
  node_modules/vue/dist/vue.esm.js
  ```

+ 这个就是runtime-compiler环境