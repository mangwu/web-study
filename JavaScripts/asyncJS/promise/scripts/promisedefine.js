let promisetimeout = new Promise((resolve, reject)=> {
  setTimeout(function() {
    resolve('Success!');
  }, 2000);
});

promisetimeout.then((message)=>{
  alert(message);
})

// 将自定义timeoutPromise写成函数
/*
  创建了一个返回超时Promise对象的函数
  message: resolve(message);
  interval: setTimeout(,interval);
*/
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

// 函数本身返回一个promise可以像用fetch()函数一样用它
/*
  使用错误的格式会报错
  会在控制台打印出reject()函数的
*/
timeoutPromise('Hello', 1000)
.then(message => {
  alert(message);
})
.catch(e => {
  console.log('Error: ' + e);
})
