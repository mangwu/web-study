
# JS中的函数

函数：可复用的代码块

## 浏览器内置函数

+ 字符串函数，如
  + replace()
  + slice()
  + split()
+ 数组函数，如
  + join()
  + .toString()
  + push()
  + pop()
  + shift()
  + unshift()
+ 随机数函数
  + Math.random()

**内置浏览器不是核心JS语言的一部分，核心JS语言指的是浏览器API; **

## 函数与方法

+ 严格来所内置浏览器函数不是函数，而是方法
+ 二者区别在于方法是在对象内定义的函数，需要对象实例进行调用
+ 而函数可以不需要对象实例而直接调用

## 自定义函数

```javascript
function random(number) {
    // some code to run
    return Math.floor(Math.random()*number);
}
```

+ 上面是一个自定义函数
  + function name() {}
  + 传入参数number
  + 执行代码
  + 返回值；
+ 函数中可以调用其他函数
  + 调用Math.floor()函数用于取整
  + 调用Math.random()函数用于创造0-1的随机数

## 调用函数

```javascript
var num = random(50);
```

+ 调用上述写过的函数
+ 得到一个在0-50的整数

## 匿名函数

```js
function() {
    alert('hello');
}
```

+ 上面是一个匿名函数
+ 无函数名
+ 通常和事件处理程序一起使用：

```js
var myBtn = document.querySelector('button');
myButton.onclick = function() {
    alert('hello')
}
```

+ 也可以赋值给多个变量，使用变量名加括号使用

```js
var myGreeting = function() {
	alert('hello');
}

var anotherGreeting = function() {
    alert('hello');
}

myGreeting();
anotherGreeting();
```

### 匿名函数和函数声明的区别

+ 匿名函数也称函数表达式
+ 函数表达式不会进行声明提升
+ 函数声明会进行声明提升

## 函数参数

+ 函数声明时在括号内添加若干参数，用逗号隔开
+ 调用时在括号内加入实参，即可
+ 有些参数是可以设置为可选的

```js
var madeString = [2,'i','a','a'].join('');
//可选参数，默认为逗号
```

## 函数作用域

作用域，即scope

+ 所有函数的最外层称为全局作用域
+ 在函数内定义的变量在自己单独的代码块范围内被使用

### 函数内部函数

+ 在函数内调用外部函数时，外部函数可能无法使用本函数内的变量
+ 尽管调用的函数在函数的作用域内，但是函数内的变量没有在调用函数内被定义
+ **实际代码在调用函数时就开始运行了**
+ 为了使调用函数使用函数内的变量，必须把将值作为参数传递给调用函数

## 函数返回值

使用 return语句返回值

