# DOM API

### 浏览器主要部分

+ #### navigator

  + 浏览器存在于web上的状态和标示（用户代理）
  + JS用Navigator对象表示
  + 可获得的信息
    + 来自用户摄像头的地理位置、用户偏爱的语言、多媒体流等
    + navigitor.appCodeName 浏览器代码名（Mozilla)
    + navigitor.appName 浏览器名称(Netsacpe)
    + navigitor.userAgent 浏览器代理
      + "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"

+ #### window

  + 载入浏览器的标签
  + JS用Window对象表示
  + 可获得信息
    + 窗口大小，Window.innerWidth 和Window.innerHeight
      + 展现当前文档的窗口，不包括标签页和调试栏
    + 存储客户端上文档的特殊数据
    + 绑定event handler等

+ #### document

  + 浏览器中用DOM表示
  + 载入窗口的实际页面
  + 在JS使用Document对象表示
  + 可用操作
    + 返回操作文档中HTML和CSS信息

## 文档对象模型

DOM:

+ 在浏览器标签中当前载入的文档抽象化为文档对象模型
+ 由浏览器生成的树结构
+ 可以使用JS等编程语言访问HTML结构

##### 常规的DOM树

+ ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Simple DOM example</title>
    </head>
    <body>
        <p>
            para
        </p>
    </body>
  </html>
  ```

+ ```
  |_DOCTYPE: html
  |_HTML
    |_HEAD
    | |_#text: (null)
    | |_META charset='utf-8'
    | |_#text:
    | |_Title
    | |  |_#text:Simple DOM example
    | |_#text:
    |_#text:
    |_BODY
      |_#text:
      |_P
      | |_#text: para
      |_#text:
  ```

+ [在线生成DOM树](https://software.hixie.ch/utilities/js/live-dom-viewer/)

+ DOM树中的元素

  + 元素节点：一个元素，存在DOM中
  + 根节点：数中顶层节点，HTML节点
  + 子节点：直接位于另一个节点内的节点，如P节点是Body节点的子节点
  + 后代节点：位于另一个节点内的任意位置的节点，P是HTML节点的后代节点（但不是子节点）
  + 父节点：直接包含另一个节点的节点，如BODY是P的父节点
  + 兄弟节点：位于同一等级的节点，如HEAD和BODY
  + 文本节点：包含文字串的节点

## 基本的DOM操作

#### 获得元素引用

```
var link = document.querySelector('a');
```

