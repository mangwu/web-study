# promises

Promise是一个对象，代表操作的中间状态。意为对未来可能返回结果的承诺

+ 它保证在未来可能返回的结果

+ 不保证在何时完成返回结果

+ ##### 保证在结果可用时，代码能正常处理结果

+ ##### 保证在结果不可用时，代码也能执行，用于处理错误

使用promise的好处：

+ 异步编程不需要对异步操作所需要的时间感兴趣（除非耗时过长)
  + promise给了一个未来返回结果的保证，无需关心时间
  + promise还给了不能返回结果的处理错误的代码，用于解决耗时过长问题
+ 异步编程需要在任何时候相应操作结果，而且不会阻塞其他代码
  + promise中的操作是异步操作，不会阻塞其他代码
  + promise保证尽可能给一个返回结果用于响应

promise用法

+ promise常用于作为函数的返回结果
+ 这个结果（promise对象）
  + 异步操作，不阻塞其他代码
  + 等待获取资源时间，然后响应
  + 如果没能获取资源就执行catch()错误代码语句，反馈失败结果

## 为什么不用回调函数

+ 回调函数在应对有多个顺序步骤的代码时会陷入回调地狱：

  + ```js
    chooseToppings(function(toppings) {
      placeOrder(toppings, function(order) {
        collectOrder(order, function(pizza) {
          eatPizza(pizza);
        }, failureCallback);
      }, failureCallback);
    }, failureCallback);
    ```

  + 对于每一步都要使用回调函数

  + 回调代码不简洁，难以阅读

+ 使用promise改良

  + ```js
    chooseToppings()
    .then(function(toppings) {
      return placeOrder(toppings);
    })
    .then(function(order) {
      return collectOrder(order);
    })
    .then(function(pizza) {
      eatPizza(pizza);
    })
    .catch(failureCallback);
    ```

  + 代码更加简介，便于阅读

  + 使用一个catch()块来处理所有问题，不会阻塞主线程

  + 每个操作运行前等待先前的操作完成，链接多个异步操作

  + .then()也返回一个promise对象

+ 使用箭头函数

  + ```js
    chooseToppings()
    .then(toppings =>
        placeOrder(toppings)
    )
    .then(order =>
        collectOrder(order);
    )
    .then(pizza =>
    	eatPizza(pizza);
    )
    .catch(failureCallback);
    ```

  + 更加简洁

+ promise和事件监听器类似，但有差异：

  + promise只能成功或失败一次。且成功和失败不能切换
  + 如果promise成功或失败并且你稍后添加成功/失败回调，则将调用正确的回调，即使事件发生在较早的时间。



## promise语法

### Web API中的一些示例

+ fetch()方法从Web获取图像

+ blob()方法转换获取响应的原始内容到Blob对象

+ 对blob()返回的对象进行生成URL处理，交给img元素

  ```js
  fetch('coffee.jpg')
  .then(response => {
  	if(!response.ok){
          throw new Error('HTTP ERROR,response status' + response.status);
      } eles {
          return response.blob();
      }
  })
  .then(myBlob => {
      let objectURL = URL.createObjectURL(myBlob);
      let image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);
  })
  .catch(e=>{
      console.log('There is a problem' + e.message);
  });
  ```

### Promise回顾

+ 创建promise,其状态不是成功和失败，这个状态叫作pending

+ 当promise返回时，称为resolved(已解决)

  + 一个成功的resolved的promise称为fullfilled（实现），返回一个值，

    通过将.then()块链接到promise链的末尾来访问该值。

    .then()块中执行程序函数将包含promise返回值

  + 一个不成功resolved的promise被称为rejected(拒绝).。它返回一个原因(reason)

    一条错误消息，说明为什么拒绝promise。通过.catch()块链接到promise链末尾访问此原因



### Promise.all()

+ 链接进程一个接一个发生，在一大堆Promise完成之后运行一些代码
+ 使用Promise.all()静态方法将一个个promises作为数组传递给all()
+ Promise.all()返回一个新Promise对象，然后链接then()块
+ 如果传入Promise.all()的任何一个promise拒绝，整个块都会拒绝

+ 因为只关心加载的数据，而不关系promise何时成功返回数据
  + 可以事先写一个函数对数据流进行处理
  + 将每个url用函数处理后得到的依然是promise，只不过是得到的文件的promise
  + 然后在对这些promise进行统一操作，使用.then()块继续统一处理



### Promise fullfill/reject后运行最终代码

+ 无论promise的状态是实现（fullfill)还是reject都需要运行一段相同代码

+ 这个时候这个相同代码可以使用.finally()方法

  ```js
  myPromise
  .then(response=> {
  	doSomething(response);
  })
  .catch(e => {
  	return Error(e);
  })
  .finally(() =>{
  	runFinalCode();
  })
  ```

## 构建自定义promise

### 基于promiseAPI组合创建

+ 例如，使用fetch()等函数组合.then()块，组合起来创建自定义函数

+ ##### 将不同的基于promise的API组合在一起以创建自定义函数是

  ##### 使用promises进行自定义事务最常见的方式。

### 使用Promise()构造函数

+ 将没有使用promise的旧式异步API用promise重构异步代码

+ 例如将setTimeout()包装成一个promise

  ```js
  let timeoutpromise = new Promise((resolve, reject) =>{
  	setTimeout(function(){
  		resolve('Success!');
  	}, 2000);
  });
  ```

+ Promise()中的参数是一个函数，该函数有如下特点

  + 使用resolve和reject函数作为函数参数
  + resolve()和reject()用来实现和拒绝新创建的promise的函数
  + resolve('Success!')将成功运行通过显示字符串'Success'
    + 将'Success!'字符串传递给下一个.then()块处理
  + 由于setTimeout()没有失败条件，reject()对它不重要
  + 自定义promise只定义了一个字符串，还可以传递更多类型数据

+ ##### 创建一个reject()拒绝promise；其中将timeoutPromise创建为函数

  + ```js
    function timeoutPromise(message, interval) {
      return new Promise((resolve, reject) => {
        // 只接受string值，否则拒绝promise
        if (message === '' || typeof message !== 'string') {
          reject('Message is not a string')
        } else if(interval < 0 || typeof interval !== 'number') {
          // 超时时间要是number类型且大于等于0
          reject('Interval is negtive or not a number');
        } else {
          setTimeout(function() {
            resolve('Message');
          }, interval);
        }
      })
    }
    ```

  + 通过判断条件添加reject();

  + 如果格式错误,catch()会被执行，catch中的e就是reject()传递的字符串

####  创建基于回调函数的promise

使用setTimeout等时间间隔做promise并不是完全异步

+ 将事件回调函数转化为promise

+ ```js
  function promisifyRequest(request) {
  	return new Promise(function(resolve, reject){
          request.onsuccess = function() {
              resolve(request.result);
          };
          request.onerror = function() {
          	reject(request.error);
      	};
      })
  
  }
  ```

  

