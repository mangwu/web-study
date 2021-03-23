# API

#### API Application Programming Interface:应用程序接口：

+ 基于编程语言构建的结构
+ 使开发人员更容易创建复杂的功能
+ 抽象复杂代码
+ 提供一些简单的接口规则直接使用

#### 接口的例子：

+ 供电时
  + 把插头插入插座，插座就是电输出的一个接口
  + 不会直接去连接电线
+ 编程显示3D图形
  + 使用更高级语言编写的API(JS,Python)
  + 直接编写直接控制计算机的GPU或其他图形功能的低级代码
    + C，C++ 更偏向底层
    + 操作复杂

## JavaScript中的API

#### JavaScript本身有很多API

+ 本身不是JS语言的一部分
+ 建立在JS语言核心的顶部
+ 分为两类：
  + 浏览器内置API.
    + 从浏览器和电脑周围环境提取数据
    + 用来做有用的复杂事情，如JS位置数据API,可以在Google地图标示位置
    + 后台使用复杂低级代码（C++）与设备GPS硬件通信获取位置数据
      + 这种复杂性通过API抽象出来
  + 第三方API
    + 在web中某些地方获取代码和信息
    + twiitter API显示最新推文等

## JS API JS工具

JS API 和JS工具的关系

+ JS，一种内置于浏览器的高级脚本语言，用来实现Web页面/应用中的功能。

  也可以用以Node这样的编程环境

+ 客户端API, 内置于浏览器的结构程序，位于JS语言顶部，使开发者更容易实现功能

+ 第三方API,置于第三方普通结构程序（Facebook，Twitter)，

  可以在Web页面使用那些平台的功能。

+ JavaScript库，包含特定功能的一个或多个JS文件，

  把这些文件关联到WEB页以快速或授权编写常见功能，例如jQuery和Mootools

+ JavaScript框架，从库开始的下一步，

  JS框架视图把HTML,CSS,JavaScript和其他安装技术打包在一起，

  然后从来编写一个完整Web应用

## API功能

[WebAPI接口文档](https://developer.mozilla.org/zh-CN/docs/Web/API)

### 常见浏览器API

+ **操作文档的API内置于浏览器中**
  + DOM API,文档对象模型API
    + 允许操作HTML,CSS
    + 动态更新样式到页面
  + 其他内置API
+ **从服务器获取数据的API**
  + 用于更新网页的一小部分相当好用
  + XMLHttpRequest API 和 Fetch API
    + 早期描述这种技术叫Ajax
+ **用于绘制和操作图形的API**
  + 允许以编程方式更新canvas元素中的像素数据
  + 可以在canvas元素中创建2D,3D场景的Canva和WebGL
+ **音频和视频API**
  + HTMLMediaElement,Web Audio API和WebRTC
  + 使用多媒体做有趣的事情
    + 创建播放视音频自定义UI控件
    + 显示字幕和视频
    + 网络摄像机抓取视频
    + 画布操作
    + 添加效果到音轨

+ **设备API**
  + 以对网络应用程序有用的方式操作和检索现代设备
  + Notifications API
+ **客户端存储API**
  + Web Storage API  [IndexedDB API](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API)
  + 用于保存页面加载之间的状态，客户端存储数据

###  常见第三方API

+ Twitter API
+ Google Maps API
+ Facebook suite of API
+ YouTube API: 将Youtube视频嵌入网站

+ 
+ 查找[Web API Directory](https://www.programmableweb.com/category/all/apis)

## API 如何工作

### 基于对象

+ API使用一个或多个JS object 在代码进行交互
+ 这些对象用作API使用的数据的容器（数据包含在对象属性中）
+ 这些对象用作API提供功能方法的容器（方法包含在对象方法）

##### 一个API例子

Geolocation API:

+ 组成对象

  + Geolocation，包含三种控制地理数据检索的方法
  + Position，表示在给定的时间的相关设备的位置
    + 包含当前位置的Coordinate对象
    + 包含一个时间戳：获取到位置的时间
  + Coordinates,包含有关设备位置的大量的有用数据
    + 经纬度
    + 高度
    + 运动速度
    + 运动方向

+ ```js
  navigator.geolocation.getCurrentPosition(function(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true
    }
    var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
  });
  ```

  + API通常包含构造函数
  + 调用构造函数创建用于编写程序的对象实例
  + API对象通常有几个可用options，调整程序所需确切环境
  + 构造函数通常接受options对象作为参数

##### API的可识别入口点

文档对象模型(DOM)API 有一个简单的入口点：

+ 被挂在Document对象
  + var em = document.createElement('em');
+ HTML元素实例
  + var para = document.querySelector('p');

其他API具有稍微复杂的入口点

+ 为要编写的API代码创建特定的上下文

  + Canvas API:

    上下文对象是透过获取要绘制的canvas元素的引用来创建

  + ```js
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    ```

  + 然后通过调用内容对象CanvasRenderingContext2D的实例属性方法

    ```js
    Ball.prototype.draw = function() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    };
    ```

##### 事件处理状态变化

+ 有些Web API包含事件
+ 事件触发时，允许运行函数处理程序属性

+ XHR对象实例

  + 每一个实例都代表一个到服务器的HTTP请求

  + 获取新资源

  + 有很多事件可用如

    + onload事件

      ```js
      var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
      
      request.onload = function() {
        var superHeroes = request.response;
        populateHeader(superHeroes);
        showHeroes(superHeroes);
      }
      ```

  