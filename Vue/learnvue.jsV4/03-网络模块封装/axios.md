# axios使用

1. ## 安装

   ```shell
   npm install axios --save
   ```

2. ## 基本使用

   + 导入

   ```
   import axios from 'axios'
   ```

   + 使用
     + url选择
     + http://httpbin.org/#/ (一个用于http请求测试的外文网站)
     + http://123.207.32.32:8000 (coderwhy的测试网站)
     + http://123.207.32.32:8000/home/data?type=pop&page=1   type=pop | sell    page>=1

   ```js
   // 默认使用get请求
   axios({
     url: 'http://123.207.32.32:8000/home/multidata'
   }).then(res => {
     console.log(res);
   })
   // 指定请求方式
   axios.get(url, config)
   ```

3. ## 全局配置

   + 在每个组件下使用axios请求是重复的麻烦工作
   + 把相似的东西进行抽离并模块化配置才更方便使用
   + 全局配置就是把axios进行抽离统一使用
   + 可以抽离的东西
     + baseURL
     + timeout（超时时间）
     + 请求头等

   #### 配置方式

   ```
   axios.default.baseURL = 'xx'
   axios.default.timeout = 1000
```
   
4. ## 请求方式

   + get 和params
   + post 和 data

5. ## axios实例

   + 不使用全局配置（全局baseURL和axios)
   + 原因：
     1. 前端请求数据的baseURL可能不止一个
     2. nginx反向代理联系多个数据服务器，给前端提供一个服务器
     3. 为了使各个组件使用不同的baseURL需要创建axios实例

6. ## 封装

   + 在每个组件中使用axios然后请求数据
   + 这种方式重复繁杂，非常不好
   + 当使用框架不再维护时，每个组件都需要改动第三方
   + 单独为第三方创建文件进行封装
   + 每个组件对封装的文件进行依赖

7. ## 拦截器

   + 在发送网络请求前拦截组件的请求
     + 拦截请求成功的请求
     + 拦截请求失败的请求

   ```js
   axiosInstance.interceptors.request.use(fun1, fun2)
   ```

   + 拦截响应
     + 拦截响应成功
     + 拦截响应失败（获得错误码）