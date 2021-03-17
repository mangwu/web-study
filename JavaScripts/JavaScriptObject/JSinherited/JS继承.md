# JS中的继承

## 原型式继承

+ #### JS继承

  + 原型链通过原型prototype和原型对象\__proto__来实现
  + 对象中的成员变量通过原型链来实现继承
  + ——————————————
  + 目前为止，创建的对象大都是浏览器内置函数（String，Array等）构造的
  + 需要创建一个继承于另一个对象的JavaScript

+ #### 原型式继承--prototypal inheritance

  + 经典面向对象语言
    + 定义类（对象模板）
    + 简单定义类继承于那些类
  + JS使用了另一套实现方式
    + 继承的对象函数(方法)不是复制的
    + 通过原型链继承
    + 这就是**原型式继承**

## 创建一个继承构造器函数

### 需求

+ 定义好了一个Person类
+ 创建一个Teacher类
  + 继承Person所有成员
  + 新属性subject
  + 更新greeting()方法

### 定义Teacher()构造器函数

+ #### call()函数

  + 这个函数允许调用一个在这个文件里别处定义的函数
  + call()函数的第一个参数是相对this指定的值
    + 可以重新指定调用函数里所有this指向的对象
    + 通常为'this'，表示本构造器
  + call()之后的参数指明目标函数运行时接受的参数

+ ```js
  function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
  }
  ```

+ 使用call()函数从Person()中继承过来

+ 注意：

  + 如果继承的构造函数不传入参数，就不需要在call()函数中指定参数

    ```js
    function Brick() {
      this.width = 10;
      this.height = 20;
    }
    function BlueGlassBrick() {
      Brick.call(this);
    
      this.opacity = 0.5;
      this.color = 'blue';
    }
    ```

  + 但是一定要指定‘this’



+ #### 设置原型

  + 构造器默认是空的原型属性，没有Person（）定义的方法

  + 使用create()方法创建一个和Person一样的原型属性值

    ```js
    Teacher.prototype = Object.create(Person.prototype);
    ```

    + 这个方法将Person.prototype一样的原型属性值作为了Teacher.prototype的原型属性值
    + 但是同时，使得Teacher的构造器变得和Person一样，这会引发问题
    + 因为prototype中存放了构造器的属性

  + 使用构造器属性设置构造器为Teacher

    ```js
    Teacher.prototype.constructor = Teacher;
    ```

    + ##### 关于构造器

    + 构造器函数也是函数原型的构造函数，即

    + Person === Person.prototype.constructor

+ #### 添加新的函数

  + 在Teacher的原型上定义一个新函数greeting()

  + ```js
    Teacher.prototype.greeting = function() {
      var prefix;
    
      if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        prefix = 'Mr.';
      } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Mrs.';
      } else {
        prefix = 'Mx.';
      }
    
      alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
    };
    ```

    

