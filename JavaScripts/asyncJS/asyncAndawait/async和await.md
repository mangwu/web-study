# async和await

#### async 和 await是promise的语法糖

## async和await基础

### async

##### 放在函数声明前，使其成为异步函数(async function)

+ ```js
  function hello(){
  	return 'Hello';
  }
  hello();// 输出hello
  ```

+ ```js
  async function hello(){
  	return 'Hello';
  }
  hello(); //输出promise
  ```

+ 异步函数特征之一：保证函数返回值为promise

##### 创造一个异步函数表达式

+ ```js
  let hello = async function() {
  	return 'hello'
  }
  // 使用箭头函数
  let hello = async () => {
  	return 'hello'
  }
  hello(); //promise
  ```

+ 使用.then()块获得实际返回值

  ```js
  hello().then((value) => console.log(value));// hello
  hello().then(console.log); //简写
  ```

### await

await关键字只在异步函数中起作用

它的用法是：

+ ##### 放在任何异步的promise的函数之前

+ ##### 使代码执行暂停在该行上，直到promise完成，返回结果值

+ ##### 暂停的同时，其他等待执行代码就有机会执行

```js
async function hello() {
	return greeting = await Promise.resolve('Hello');
};
hello().then(alert);
alert('123456');// 先输出
```

### 重写promise代码

```js
async function myFetch() {
	let response = await fetch('coffee.jpg');
    let myBlob = await response.blob();
    
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}

myFetch()
.catch(e=>{
    console.log('There has been a problem with your fetch operation:' + e.message);
})
```

+ 也可以将创建url和img元素放在.then()块中，更加灵活

### await和async如何工作

+ 把async放在函数声明前，await放在异步函数内部工作

+ 不需要加.then()代码块到每个promise-based方法的结尾

+ 只需要在方法调用前调用添加await关键字，把结果赋值给变量

  + await使JS运行时暂停于此行

  + 允许其他代码在此期间执行

  + 直到异步函数返回结果

  + ```js
    let response = await fetch('coffee.jpg');
    let myBlob = await response.blob();
    return myBlob;
    ```

    + 解析器在第一行暂停，直到服务器返回的响应变可用
      + fetch()返回的promise会fullfilled（完成)
      + 返回的response被赋值给response变量
    + 服务器返回的响应可用，解析器移动到下一行
    + 创建myBlob，blob也基于异步promise方法
    + 和第一行代码操作一样，myBlob也接受promise完成后的blob
    + 最后返回操作结果
    + 调用async声明的函数返回promise
      + 将其用.then()链接到末尾
      + 处理blob

  + 这种使用关键字的方式其实是：**用更少的.then()块来封装代码，同时更像同步代码**

### 错误处理

#### 将try……catch结构和关键字一起用

```js
async function myFetch() {
	try {
        let response = await fetch('coffee');
        let myBlob = await response.blob();
        
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    } catch(e) {
        console.log(e);
    }
}
myFetch();
```

+ 如果使用更加灵活的异步代码块（返回blob）
  + 仍然使用.then()
  + 在.then()末尾添加.catch()块
  + 不能使用try……catch

## 等待Promise.all()

+ ```js
  async function fetchAndDecode(url) {
    // 数据
    let response = await fetch(url);
    // 内容
    let content;
    if (response.headers.get('content-type').indexOf('image') != -1) {
      content = await response.blob();
    } else if (response.headers.get('content-type').indexOf('text') != -1) {
      content = await response.text();
    }
  
    return content;
  }
  ```

+ 然后在另一函数中调用就可以使用Promise.all()了

+ ```js
  let coffee = fetchAndDecode('image/coffee.jpg');
  let tea = fetchAndDecode('image/tea.jpg');
  let description = fetchAndDecode('description.txt');
  ```

### async/await的缺陷

+ 看起来是同步的

+ 阻塞其后代码直到promise完成

+ 它确实可以允许在其他任务在此期间继续运行，

  + 但是在异步操作中的其他代码被阻塞

+ 每个await都会等待前一个完成

  + 实际想要是所有这些promises同时开始处理

  + 解决方法：

    + 将Promise对象存储在变量中来同时开始

    + 然后等待它们同时完成

      ```js
      async function timeTest() {
        const timeoutPromise1 = timeoutPromise(3000);
        const timeoutPromise2 = timeoutPromise(3000);
        const timeoutPromise3 = timeoutPromise(3000);
      
        await timeoutPromise1;
        await timeoutPromise2;
        await timeoutPromise3;
      }
      ```

      

+ 必须将等待执行的promise封装在异步函数中

### async和await应用在类方法上

+ 在类/对象方法前面添加async

+ 并await内部的promise

  ```js
  class Person {
    constructor(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    async greeting() {
      return await Promise.resolve(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
  }
  ```

### 浏览器支持

IE和Opera mini可能不支持async/await