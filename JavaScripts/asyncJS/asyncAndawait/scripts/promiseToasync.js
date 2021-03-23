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
  let response = await fetch('image/coffee.jpg');
  let myBlob = await response.blob();

  // 返回二进制流数据
  return myBlob;
}
// 调用异步函数
myFetch2()
.then(myBlob => {
  // 为二进制数据创建url
  let objectURL = URL.createObjectURL(myBlob);
  // 创建图片元素
  let imagecoffee = document.createElement('img');
  imagecoffee.src = objectURL;
  
  document.body.appendChild(imagecoffee);
})
.catch((e)=>{
  console.log('fetch 有问题' + e.message);
});

// 结合try catch的错误处理
async function myFetch3() {
  try {
    let response = await fetch('image/coffee.jpg');
    if (!response.ok) {
      throw new Error('fetch 失败');
    }
    let myBlob = await response.blob();

    // url img
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  } catch(e) {
    console.log(e.message);
  }
}

myFetch3();