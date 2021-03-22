# 合作异步JavaScripts

## 传统JS方法

### 在一段时间或规则间隔，以异步的方式运行代码



## 时间间隔

+ web提供了很多函数用于在一段时间间隔后异步执行代码
  + setTimeout()
    + 在指定的时间后执行一段代码
    + 在调用执行之前会运行其他代码
  + setInterval()
    + 以固定的时间间隔重复运行一段代码
    + 在迭代之间会运行其他代码
  + requestAnimationFrame()
    + setInterval()的现代版本
    + 在浏览器下一次重新绘制显示之前执行指定的代码块
    + 运行动画在适当帧率下运行，不管在什么环境运行
+ 这些函数的异步代码实际上在主线程运行



### setTimeout()

在指定时间后执行一段特定代码，参数：

+ 要运行的函数或函数引用
+ 在指向代码之前等待的时间间隔，单位ms。
  + 省略或者值为则尽快运行
+ 更多的参数:在指定函数运行时，传递给函数的值

例如

```js
let myGreeting = setTimeout(function() {
  alert('Hello, Mr. Universe!');
}, 2000)
```

+ 匿名函数将在2s后显示alert信息
+ 函数可以有名称，可以时函数引用，也可以用箭头函数

```js
let myGreeting = setTimeout(function sayHi() {
  alert('Hello, Mr. Universe!');
}, 2000)

let myGreeting = setTimeout(() => {
  alert('Hello, Mr. Universe!');
}, 2000)

function sayHi() {
  alert('Hello, Mr. Universe!');
}
let myGreeting = setTimeout(sayHi, 2000)
```

#### 清除超时

+ 调用clearTimeout()，用于在定义时间之前取消执行超时函数中的代码块

+ 如果定义时间已到，超时函数已经执行，则无效

+ 参数：超时函数的返回值。一般用变量存储

  + ```JS
    let myGreeting = setTimeout(sayHi, 2000);
    clearTimeout(myGreeting);
    ```

### setInterval()

在一定时间间隔反复运行代码

+ 第一个参数为需要执行的函数‘
+ 第二个参数为时间间隔，表示重复执行的时间间隔不少于第二个参数给出的毫秒数
  + 后面的参数为第一个参数的函数所需参数

### setTimeout()和setInterval() 的其他用法

#### setTimeout()递归

+ 可以使用setTimeout()重复运行相同代码

+ 使用递归可以让setTimeout()实现setInterval()的功能

  ```JS
  let i = 1;
  setTimeout(function run() {
  	console.log(i);
      i++;
      setTimeout(run, 100);
  }, 100);
  // 每100毫秒运行传递来的函数run()
  ```

+ 使用setInterval()实现同样功能的代码

  ```js
  let i =1;
  setInterval(function run() {
      console.log(i);
      i++;
  }, 100);
  ```

#### 递归setTimeout()和setInterval()的区别

+ 递归setTimeout()保持执行之间的延迟相同，代码执行间隔是相同的

  + ```
    [100ms][x][100ms][x][100ms]
    //外部setTimeout()等待100ms, 执行代码块中的两个语句要用时间x,递归执行setTime()
    //再等待100ms
    ```

+ setInterval()代码运行时间和执行间隔加起来为100ms,如果代码需要30ms运行，则

  + ```
    [100ms][30ms][70ms][30ms][70ms]
    // 代码运行时间被算入间隔时间内
    ```

+ 使用setTimeout()可以将每一次迭代的时间间隔设置为不同时间，如：

  + ```js
    let i = 1;
    setTimeout(function run(){
        console.log(i);
        i++;
        let k = 100 + i * 10;
        setTimeout(run, k);
    }, 100);
    // 每次迭代的时间间隔都会变长
    ```

+ 当代码的执行的时间比你分配的时间间隔还长时，使用递归setTimeout()不会出错

#### 立即超时

+ 使用0作为超时函数的第二个参数，会立即执行回调函数

+ 立即执行指在主线程代码运行之后执行

  ```js
  setTimeout(function() {
    alert('World');
  }, 0);
  
  alert('Hello');
  // 先打印出Hello，再打印出World
  ```

+ 如果您希望**设置一个代码块以便在所有主线程完成运行后立即运行**，这将很有用



### requestAnimationFrame()

+ 一个专门的循环函数
+ 用于在浏览器中高效运行动画
+ 现代版本的setInterval()
+ 在浏览器中重新加载显示内容之前执行的指定代码块
+ 允许动画以适当帧率运行

##### 相较于setInterval(),它解决了很多问题，如不针对设备优化帧率，动画滚出页面等

常见使用方式：

```js
function draw() {
	// Drawing code
	requestAnimationFrame(draw);
}

draw();
```

##### 帧率为60fps，则大约16.7ms执行动画代码来渲染每一帧

##### requestAnimationFrame()函数的回调函数可以赋予一个参数（时间戳)

+ 这个时间戳值用于记录当前时间点

+ 用当前时间减去开始时间（通过第一次循环参数获得）

+ 可以得到requestAnimationFrame()函数运行的时间

  ```js
  let startTime = null;
  
  function draw(timestamp) {
      // 第一次进行函数时获得当前时间点作为开始时间
  	if (!startTime) {
  		startTime = timestamp;
  	}
  	// 运行函数时间
  	currentTime = timestamp - startTime;
  	// do some thing
  	
  	requestAnimationFrame(draw);
  }
  
  draw();
  ```

  

#### requestAnimationFrame（）与前两个时间间隔不同之处

+ 使用setInterval():

  ```js
  function draw() {
  	//Drawing code
  }
  setInterval(darw, 17);
  ```

  + 需要指定时间间隔（60帧，17ms)
  + 不会对动画平滑度有优化

+ 使用requestAnimationFrame():

  + 不需要指定时间间隔
  + 会自动对动画进行平滑动优化

#### 撤销动画循环

使用cancelAnimationFrame()函数

```js
var rAF = requestAnimationFrame(draw);
cancelAnimationFrame(rAF);
```

### 限制requestAnimationFrame()动画

+ 由于requestAnimationFrame()没有循环时间间隔的参数

+ 无法选择帧率
+ 需要通过计算更新动画帧中的位置代码来限制帧率