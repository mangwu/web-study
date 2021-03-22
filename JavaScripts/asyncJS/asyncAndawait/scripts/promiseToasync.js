// 异步函数
async function myFetch() {
  // 使用await 暂停执行异步代码直到获得资源
  let response = await fetch('image/coffee.jpg');
  let myBlob = await response.blob();
  // 为二进制流对象 创建url
  let objectURL = URL.createObjectURL(myBlob);
  let imgcoffee = document.createElement('img');
  imgcoffee.src = objectURL;
  document.body.appendChild(imgcoffee);
}

// 调用异步函数
myFetch()
.catch(e=>{
  console.log('There has been a problem with your fetch operation:' + e.message);
});

// 重构代码，建后半段的处理二进制流操作放到.then()块中
async function myFetch2() {
  // 使用await 暂停执行异步代码直到获得资源
}