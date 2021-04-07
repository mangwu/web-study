# 配置webpackconfig方便使用web

+ mode：开发模式

+ entry：入口

+ output： 出口

+ 使用webpack命令直接打包

+ 如果更改webpack.config.js文件名，需要使用如下命令

  ```
  webpack xxx.config.js
  # 打包
  ```

  

## npm run xxx

+ 当webpack命令过长时，可以映射到npm run

+ 在package.json中的script脚本中更改

+ ```json
  "scripts": {
  	//在这里添加一些脚本命令
      "test": "echo \"Error: no test specified\" && exit 1",
  	"build": "webpack"
    },
  ```

+ 这样定义后优先使用本地的webpack，而不是全局的webpack

#### 开发时依赖

+ webpack是开发时需要的依赖

+ 加上 --save-dev

+ 开发需要的东西放在

+ ```
  "devDependencies": {
      "webpack": "^5.30.0",
      "webpack-cli": "^4.6.0"
    },
  ```

  

#### 运行时依赖

+ 打包完了webpack是没用的

+ 运行时需要的依赖放在

+ ```
  "dependencies": {}
  ```

  