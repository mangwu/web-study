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

### SPA

```
const app = new Vue({

 el: '#app',

 data: {

  message: 'Hello, webpack'

 }

})
```

+ 可以通过这种方式进行使用vue了
+ 但是SPA(simple page web application)
  + 单页面富页面
+ 通过vue-router前端路由进行调转



但是修改页面也需要在index.html中改变，

不希望手动频繁修改：

##### 把app转到template中使用

+ 定义template

+ vue内部编译时会把template内容替换到

+ ```html
  <div id='app'>
  
  </div>
  ```

+ el会将template中的内容替换到挂载的app中
+ vue实例本身也是组件，所以有template属性



### 对template代码进行抽取

##### 抽取到vue文件中，初次之外data，methods都可以抽取，只需要在main.js中引用vue并注册APP就行了

#### 在main.js中引入注册App

```js
// 使用vue进行开发
import Vue from 'vue';

// import App from './vue/app'
// 在vue文件中抽取模块 但是无法加载，因为vue文件需要loader
import App from './vue/App.vue'

new Vue({
  el: '#app',
  // 抽取到外面
  template: '<App></App>',
  // 抽取到外面
  data: {},
  components: {
    // 注册组件
    App
  }
})
```

#### 在App.vue文件中编写模板导出组件，添加样式

```vue
<template>
  <div id='app'>
    <h2 class='title'>
      {{message}}
    </h2>
    <p>
      {{name}}
    </p>
  </div>
</template>

<script>

export default {
  // 包括方法都可以抽取 抽取到
  data() {
    return {
      message: 'Hello, webpack',
      name: 'mangwu'
    }
  }
}
</script>

<style scoped>
  .title {
    color: green;
  }
</style>
```

### 加载器

加载vue文件需要加载器

先对文件进行加载（导入到项目中），再对文件进行编译（编译成js）

```shell
npm install vue-loader vue-template-compiler --save-dev
```

+ 注意导入vue-loader也需要配置webpack.config.js

  1. 加入rules

  ```js
  {
      test: /\.vue$/i,
          use: {
              loader: 'vue-loader',
          },
  },
  ```

  2. 14.2.2以上版本的需要加入一个插件

  ```js
  const VueLoaderPlugin = require('vue-loader/lib/plugin')
  // 引入插件
  module.exports = {
  	…………
  	// 声明一个插件
  	plugins: [
      	new VueLoaderPlugin()
    	],
  }
  ```

  3. 注意\<style lang='css'\>



### 扩展名

可以再webpack.config.js中配置resolve添加扩展名配置

+ 简写导入模块的路径后缀名

