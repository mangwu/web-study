# Webpack

+ 模块和打包 前端模块化打包工具

+ ##### webpack是一个现代的JS应用的静态模块打包工具



+ 用不同语言开发的程序，打包成浏览器可以识别的src
  + .js .css .jpg .png等



1. ### 模块

+ 前端模块化使用ES6规范，webpack就可以将不支持ES6的浏览器的源码打包成ES5
+ 同理AMD,CMD，CommonJS也能用webpack打包成ES6，ES5（浏览器能够识别）
+ 模块化开发之间有依赖，webpack能整合处理模块间的依赖关系

2. ### 打包

+ 将各类资源模块进行整合，合成一个或多个包
+ 打包还可以对资源进行处理，如压缩文件，将scss转化为scc，ES6转化为ES5等



#### 其他打包工具

grunt/gulp

+ 核心Task:定义处理事务
+ 执行这些task,让流程自动化
+ 前端自动化管理工具

使用gulp

+ 模块依赖简单
+ 只能简单合并,压缩



强调流程自动化,模块化不是核心

webpack强调模块化开发,支持各种模块化,处理所有模块依赖,预处理等



## webpack依赖环境

+ node.js环境
+ webpack打包工具必须在node上跑
+ node环境为了可以执行很多代码,必须其中包含各种依赖包
  + npm工具(自己也是node环境下的一个包)
  + 通过npm可以下载管理node环境下支持的各种包



### 开发项目

src ：开发的东西 

+ main.js/index.js 入口

dist ：最终打包的东西

index.html

+ 不需要引入main.js
+ 在js中以模块化开发 