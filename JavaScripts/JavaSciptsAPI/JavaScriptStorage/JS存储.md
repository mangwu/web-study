# JS存储

## 客户端存储

服务器端使用数据库来存储数据称为**服务器端存储**

运行服务器端代码来重新获取数据库中数据，插入到静态页面的模板中

##### 客户端存储原理

+ 与服务器端相似，但使用上不同
+ 由JS APIs组成允许在客户端存储数据（在用户机器存储）
+ 可以在需要的时候重新取得数据，其好处是
  + 个性化网站偏好
  + 保存站点行为（记录用户是否登录过，用户一些行为）
  + 本地化保存数据和静态资源，使得站点更快加载
  + 保存web已经生成的文档可以离线状态访问
+ 客户端和服务器端存储结合一起
  + 请求服务器端音频文件等
  + 下载后存储在客户端数据库
  + 只需下载一次，之后直接在客户端数据库检索

### 客户端存储方法

#### cookies 传统方法

+ 最早的客户端存储形式cookies
+ cookies过时了，存在各种安全问题，无法存储复杂数据
+ 使用document.cookies可查看网站存储的cookies

#### Web Storage 和 IndexedDB

+ web Storage API 提供简单语法，用于存储和检索较小的，键值对组成的数据
  + 用于用户的名字
  + 用户的登录状态
  + 背景颜色等
+ IndexedDB API 提供完整的数据库系统来存储复杂数据
  + 用于存储完整的用户记录
  + 存储复杂数据类型，如视频音频

#### 未来流行：Cache API

+ Cache API,只有一些现代浏览器支持
  + 存储特定HTTP请求的响应设计
  + 对于像存储离线网站文件这样的事情有用，网站在离线下也能使用



### web storage 存储简单数据

+ 容易使用，只需要存储简单的 键值对（限制为字符串，数字等）数据
+ 在需要时检索键值对数据

#### 基本语法

+ 所有web Storage数据都包含在两个类似对象结构中

  + sessionStorage
    + 会话数据
    + 浏览器开着，数据就会一直保存
    + 浏览器关闭，数据就会丢失
  + local Storage
    + 本地数据
    + 一直保存数据
    + 浏览器关闭在开启后数据仍会存在

+ xxStorage.setItem()方法允许存储保存数据项

  + 接受两个参数，数据项名字和数据

  + ```js
    localStorage.setItem('name', 'mangwu');
    ```

+ xxStorage.getItem()方法接受一个参数

  + 接受键参数
  + 索引数据项名称
  + 返回数据项值（没有就返回null)

+ xxStorage.removeItem()方法允许删除数据项

  + 接受键参数

  + 检索数据项名称，删除键值对

    ```js
    localStorage.remove('name');
    // 删除name键值对，无返回值（undefined）
    ```

#### 域名分离存储

每个域都有一个单独数据存储区

两个网站数据是无法互通

### IndexedDB 存储复杂数据

+ IndexedDB API（IDB）

  + 存储复杂数据，如视频，图像等
  + 在浏览器中访问的一个完整数据库系统

+ 打开IndexedDB数据库

  ```js
  let request = window.indexedDB.open('notes', 1);
  ```

  + 打开notes数据表，数据库版本为1
  + 数据库打开是异步的，需要返回请求打开的信息（成功或失败）
  + 请求完成或失败时，使用事件处理程序运行代码

+ 为请求打开IndexedDB事件响应分别指定响应函数

  + 打开成功

    ```js
    // 读取数据库成功
      request.onsuccess = function() {
        console.log('Database opened successfully');
        // 存储数据库结果
        db = request.result;
        // 处理展示数据
        displayData();
      }
    ```

  + 打开失败或者需要更新数据库

    ```js
    request.onupgradeneeded = function(e) {
        //  数据库引用， e.target就是指触发事件的request本身
        // 使用let定义的是一个局部域db，此事件在onsuccess前发生，需要单独操作
        let db = e.target.result;
    
        //使用IDBDatabase中的方法创建数据对象(数据表)
        // 第一个参数为数据表名，第二个参数为存储的数据对象
        // 其中默认指定了一个关键字id作为主键
        let objectStore = db.createObjectStore('notes', {keyPath: 'id', autoIncrement: true}); 
    
        // 使用创造索引方法创造另外两个索引
        objectStore.createIndex('title', 'title', {unique: false});
        objectStore.createIndex('body', 'body', {unique: false});
        /*
        数据表记录对象:
        {
          title: "some description",
          title: "Need some description",
          id: 8
        }
        */
    
        console.log(objectStore);
        console.log('数据表建立完成');
      }
    ```

+ 提交表单，添加数据到数据库并展示数据
  + 先阻止默认提交行为

    ```js
    e.preventDefault();
    ```

  + 在获取表单值创建数据对象后，打开数据库

    ```js
    let transaction = db.transaction(['notes'], 'readwirte');
    // 数据表名， 读取方法
    let objectStore = transaction.objectStore('note');
    // 数据表引用
    
    // 添加新表项（记录）
    let request = objectStore.add(newItem);
    
    // 添加成功清除输入框
    // 添加完成更新页面
    transaction.oncomplete = function() {
        displayData();
    }
    // 添加失败报错
    ```

+ 显示数据

  + 先清空文档列表项（防止重复添加）

  + 打开数据库，使用游标指针循环遍历数据表

    ```js
    let objectStore = db.transaction('notes').objectStore('notes');
    
    // 获得游标引用
    objectStore.openCursor().onsyccess = function(e) {
        // 获取数据表游标引用
        let curor = e.target.result;
        // 修改列表
        ……
        //循环迭代
        curor.continue()
        
        // 判断列表是否为空
    	// 添加提示语句
    }
    ```

+ 删除记录

  + 先删除数据表里的记录

    ```js
    // 获取noteid
    let noteid = Number(e.target.parentNode.getAttribute('data-note-id'));
    // 打开数据库表删除note
    let request = objectStore.delete(noteId);
    ```

  + 删除表的记录后在删除展示的数据

    ```js
    transaction.oncomplete = function() {
    	// 删除文档数据
    }
    ```

#### IndexedDB存储复杂数据

+ 存储视频，图像等信息

+ 
+ 首次运行，从网络下载所有视频
  + 存储在IndexedDB中
+ 在UI内部使用video元素显示视频
+ 第二次运行从数据库中获取视频数据
  + 使得加载更快，占用网络资源更少

## 离线文件存储

+ 每次加载网页都需要下载HTML,CSS和JavaScript文件