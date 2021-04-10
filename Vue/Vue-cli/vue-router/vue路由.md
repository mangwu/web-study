# 路由

### 路由是什么

+ 定义：通过互联的网络把信息从源地址传输到目的地址的活动
+ 路由器作用：
  + 路由和转送
  + 路由决定数据包从来源到目的地的路径
  + 传送将输入端的数据转移到合适的输出端
+ 路由表
  + 本质上是一个映射表
    + [内网ip: 电脑mac地址]
  + 决定数据包的指向

## 路由各个阶段

### 前后端

### 1. 网页发展-后端路由渲染

+ #### 后端渲染(jsp/php开发)

  + jsp/php -----（后端渲染html + css）

  + 早期使用jsp传到浏览器显示网页

  + 后端渲染流程：

    + 输入网址url：xxx.com
    + 浏览器将url发送到服务器
    + 服务器解析url
    + 通过jsp返回一个网页（包含html + css + java)
      + java作用：**从数据库中读取数据并且动态渲染到页面**
    + 页面已经在服务器端渲染好了（html + css)
    + 浏览器接收到后直接显示

    +  
    + 当用户又点击一个链接，浏览器又会发送一个url给后端
    + 后端对这个url做同样的事情

  + 后端会有一种映射关系：url <=> HTML + css

  + ##### 后端处理URL和页面之间的映射关系，这种路由就叫后端路由

+ #### 后端路由

  + 服务器如何处理多页面
    1. url和网页映射
    2. 服务器通过一些方式（正则等）对URL进行匹配，找到页面
    3. 交给一个控制器（Controller）进行处理
    4. 控制器生成HTML和CSS以及相关数据，返回给前端
  + 上述操作就是后端路由的处理方式

+ 后端路由缺点：

  + 所有页面模块由后端编写
  + 前后端不分离（前端必须学习php或者java）
  + HTML和数据逻辑代码（java等）混在一起 ，编写维护困难

### 2. 网页发展--前后端分离阶段

+ #### 前后端分离流程网页请求（JQuery开发)

  + 用户输入网页地址url
  + 浏览器发送请求，在**静态资源服务器**拿静态资源（HTML,CSS,js)
  + 浏览器直接渲染HTML和CSS
  + 浏览器执行JS代码（ajax相关代码）
  + 前端发送**ajax网络请求**（url:api接口),发送到**提供API接口的服务器**
  + 提供API接口的服务器可以连接数据，将数据返回到浏览器
  + 前端通过JS和拿到的数据创建标签等，动态放入浏览器渲染

  +  当用户点击其他链接，以同样的方式执行请求静态数据，请求API接口提供动态数据
  + 
  + 有时候静态资源服务器和提供API接口的服务器集合在同一台服务器上

+ #### 后端只负责提供数据，不负责任何阶段的内容

  + ##### 前端渲染：网页大部分内容都是前端写的js代码在浏览器中执行，最终渲染出来的网页

+ #### 优点

  + 前后端责任清晰，
  + 后端专注数据，前端专注交互和可视化
  + 移动端（APP）也可以直接请求API接口获得数据

### 3. 单页面富应用阶段

Simple Page web Application

+ SPA主要特定就是在前后端分离的基础上加上一层前端路由
+ 前端来维护一套路由规则

#### SPA页面（Vue.js开发)

+ 整个网页只有一个html页面

+ 前后端分离时的静态资源服务器有好几套html+css+js(分别对应不同url)和公共js

+ 单页面富应用的静态资源服务器只有一个index.html ,一些css（可能也只有一个）， 一个js

+ 用户输入url，请求静态资源服务器，获得全部静态资源（index + css + js)

+ 首先浏览器会抽离一部分资源，渲染首页内容

+ 当用户点击到其他页面时，浏览器会抽离另一部分资源进行渲染显示

+ 这种抽离渲染需要有一种技术支撑=>**前端路由**

+ ##### 前端路由会有一些映射关系，

  + 点击到不同链接生成url

  + 通过js代码判断，url映射到全部资源的一部分资源

  + 然后抽离这一部分资源到浏览器渲染

  + ##### 这一部分资源就是vue中的一个个组件

  + 改变url，页面不进行整体刷新



## vue-router

### 改变url不刷新页面

+ #### URL hash(默认方式)

  + location.hash = 'xxx' 不会刷新页面但是会改变url
  + 通过监听hash的改变来获得改变的url
  + 然后通过url，前端路由会改变页面，并且不发生页面刷新

+ #### HTML5 history.pushState（HTML5模式）

  + 通过history对象修改url

  + ```
    history.pushState({},'', url)
    ```

  + url改变但是页面不会刷新

  + pushState将url传入一个栈结构中

  + 通过history.back()可以将网页url变为上一个(出栈一个url，显示栈顶url)

+ #### HTML5 histroy.replaceState（HTML5模式）

  + ```js
    history.replaceState({}, ''. url)
    ```

  + url改变且页面不会刷新

  + 但是没有压栈和出栈操作，没有历史记录

+ #### HTML5 history.go（HTML5模式）

  + 通过pushState()压入的栈来直接进入某个url

  + ```
    history.pushState({}, '', url1)
    history.pushState({}, '', url2)
    history.pushState({}, '', url3)
    
    history.go(-2) //一次弹出两个url 相当于两次back() 显示url1
    history.go(2) //一次压入两个url 相当于两次forward() 显示url3
    ```

### 三大框架的路由

Angular的ngRouter

React的ReactRouter

Vue的vue-router

## vue-router

+ 基于路由和组件，将路径和组件映射起来
+ url改变，自动改变组件

### 安装路由

```
npm install vue-router --save
// 运行时依赖 ，局部安装
```

### 使用路由

1. ##### 导入路由对象，调用Vue.use

2. ##### 创建路由实例，传入路由映射配置

3. ##### 在Vue实例中挂载创建的路由实例



# 具体使用路由

### 1. 安装

### 2. 在src里面创建一个文件夹router

### 3. 创建index.js配置路由

```js
// 导入路由对象
import VueRouter from 'vue-router'
// 导入vue
import Vue from 'vue'

// 1. 通过vue.use(插件)，安装插件(这个插件就是vue路由)
Vue.use(VueRouter)

// 2.创建路由对象,需要使用路由就要创建其实例
const router = new VueRouter({
  // 传入相关选项
  // 配置路由和组件之间的映射关系的对象
  routes: [
    // 一个url对应一些组件
  ]
})

// 3. 将router对象传入到Vue实例中，导出成模块
export default router
```

### 4.main.js引入路由

```js
// 自动找index.js文件
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
```

### 5. 创建组件

+ 一个路径和一个组件相对应
+ 配置路由映射
+ 通过router-link和router-view使用路由

