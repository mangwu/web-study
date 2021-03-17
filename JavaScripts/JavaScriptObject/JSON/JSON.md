# JSON

+ JSON是一种按照JavaScrit对象语法的数据格式

  + 基于JS语法
  + 独立于JavaScript
  + 许多环境都能读取和生成JSON

+ #### JSON作为对象存在

  + 用于解读JSON中的属性

+ #### JSON作为字符串

  + 用于网络传输JSON数据

+ JavaScript提供一个全局的可访问的JSON对象来进行数据转换

+ #### JSON存储

  + 可以存储在自己文件中
  + 文本文件 ，扩展名.json

## JSON 结构

基于JavaScript对象

```json
{
    KEY : value,
    KEY : value,
    KEY : value,
    KEY : value,
    ……
}
```

+ #### key

  + 必须是字符串

+ #### value

  + 字符串，数组，数字，字面值对象等

+ 访问方式

  + 句点访问
  + 方括号访问
  + 结合使用

## JSON数组

数组对象也是一种合法的JSON对象，结构如下

```json
[
    {
        KEY : value,
        key : value,
        ……
    },
    {
        KEY : value,
        key : value,
        ……
    }
]
```

## 注意事项

+ JSON是纯数据格式，只包含属性，没有方法

+ ##### JSON字符串和属性名称必须使用双引号

+ ##### 注意JSON中只有逗号和分号，且不能有遗漏或错位

+ JavaScript中的对象属性可以不加引号，但是JSON必须用带引号的字符串

## 加载JSON

使用XMLHTTPRequest的API(XHR)加载JSON:

+ #### XMLHTTPRequest

  + 使用它来向服务器请求资源文件
  + 如图片，文本，json，HTML片段
  + 这意味着可以更新小段内容不用重加载页面

+ 保存json的url

  ```js
  var requestURL = 'json/data.json'
  ```

+ 创建HTTP请求

  ```js
  var request = new XMLHttpRequest();
  ```

+ 使用open()函数打开新请求

  ```JS
  request.open('GET', requestURL);
  ```

  + open函数至少两个参数
  + HTTP方法，网络连接使用，GET获取简单的数据
  + URL,指向请求地址

+ 设置请求数据格式，发送请求

  ```js
  request.respanseType = 'json'
  request.send();
  ```

+ 加载服务器数据

  ```js
  request.onload = function() {
  	var jsondata = request.response;
  }
  ```

+ 使用json对象

  + 可以像使用JS对象一样使用json对象
  + 可以定义一些方法，以json对象为参数，为HTML文档增加元素和数据

## 对象和文本的转换

+ 设置XHR访问json格式后，直接像使用JS对象一样使用json对象是很简单的

  ```js
  request.responseType = 'json';
  ```

+ 如果服务器发送的json数据是以字符串形式传送的

  + 就需要文本转换了

+ #### 浏览器内建JSON

  + JSON.parse():以文本字符串形式接受JSON对象作为参数，并返回相应的对象
  + stringify()：接收一个对象作为参数，返回一个JSON字符串
  + 