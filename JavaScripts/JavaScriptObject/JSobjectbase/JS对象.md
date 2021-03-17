# 对象

## 对象基础

+ **对象是一个包含相关数据和方法的集合**

  + 包含一些变量和函数
  + 在对象中的变量和函数被称为属性和方法

+ ```js
  var person = { }
  ```

+ 在对象中声明属性方法的规则

  ```JS
  var person = {
      // 属性（变量）
  	member1Name : member1Value,
      member2Name : member2Value,
      
      // 方法(函数)
      member3Name : function() {
          code to run;
      },
      member4Name : function() {
          code to run;
      }
  }
  ```

+ 对象成员的值可以是任意的

  + 数组，字符串，数字，函数等

+ 对象中的方法英文名为,method，区别于function 函数

+ **手动写出对象的内容来创建的对象称为对象的字面量（literal）**

  + 不同于类实例化一个对象

+ 字面量的**用途**

  + 用于传输一些有结构和关联的资料
  + 例如，发送一个请求到服务器以存储数据
    + 比起数组标识性更强
    + 比起类实例化对象更方便

## 调用方法

### 点表示法

点表示法：dot notation

+ 对象名称为一个命名空间（namespace），写在第一位

+ 当访问对象内部属性或方法，使用点(.)

+ 想要访问的项目

  + ```js
    var person = {
        some declare;
    }
    // 属性
    person.age;
    // 数组属性子元素
    person.interests[1];
    //方法调用
    person.info();
    ```

+ 子命名空间

  + 对象可以做为另一个对象成员（属性）的值
  + 访问对象成员的属性或方法，使用链式句点调用
  + 这相当于**创建了一个子命名空间**
    + 可以在子命名空间内使用与父命名空间相同
      + 属性名
      + 方法名

### 括号表示法

括号表示法：bracket notation

+ 对象名

+ 方括号

+ 括号内输入属性的字符串

  + ```js
    person['age']; // 返回属性
    person['relative']['mom']; // 返回对象成员的属性
    ```

+ 这和使用括号法访问数组是一回事
  + 数组使用值索引元素
  + 对象使用字符串索引元素
  + 对象有时候称为关联数组

## 设置对象成员

使用句点或括号访问法得到属性然后直接赋值即可

+ 创建新成员

  + 在指定命名空间下使用两种方法

  + 调用一个不存在的属性或方法

  + 给这个不存在属性或方法赋值

  + 这个属性或方法就会被创建在指定命名空间下

  + ```js
    person.myRelative = function() {
    	some code to do;
    }
    ```

+ 括号访问法可以动态设置新成员名称

  + 点访问法添加新成员必须直接指明命名空间下新成员名称

  + 括号访问法中括号的值可以由变量赋予

  + 变量存储的值（一般为字符串）就成为了新属性的名称

    + 由于变量存储的值是可变的
    + 所以新属性名称是动态的

  + ```js
    var dataName = ['height', 1.8];
    person[dataName[0]] = dataName[1]; //添加新属性height，属性值为1.8
    
    ```

## this

### **this指向了当前代码运行时的对象**

+ 为什么不使用对象名
  + 使用this能保证当代码的上下文改变时变量的值的正确性
+ 在字面量对象中，this不是那么有用
+ 在动态创建一个对象时（使用构造器），this非常有用

## 对象无处不在

+ 使用浏览器内建API

  + ```js
    const p = document.querySelect('p');
    ```

  + 这是在使用浏览器API的内建Document实例对象document
  + 每个页面被加载完毕后，都会有一个Document实例被创建
  + document代表整个页面结构和一些方法属性

+ 使用JS的内建对象

  + ```js
    var myString = '123';
    let list = myString.split(',');
    ```

  + 使用字符串实例上的可用方法

  + 新字符串会自动被创建为String实例

+ 其他内建对象或API

  + Array
  + Math

+ 内建API不会总时自动地创建对象实例

  + Notification API可以发器系统通知

  + 需要使用构造器进行实例化

  + ```js
    var myNotification = new Notification('Hello');
    ```

    





