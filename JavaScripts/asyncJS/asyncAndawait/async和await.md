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

+ ##### 放在任何异步的promise函数之前

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

