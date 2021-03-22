// 调用fecth方法，将图像url作为参数从网络提取
let promise = fetch('image/coffee.jpg');

// promise代表一个最初既不成功，也不失败的中间状态（pending)

// 响应fetch()操作,对响应主体response进行操作
let promise2 = promise.then(
  response => {
    if (!response.ok) {
      throw new Error('HTTP error! status:'+ response.status);
    } else {
      return response.blob();
    }
    
  }
);

// 每次调用.then()都会创建一个新的promise，而blob()方法也返回一个promise对象
// 
let promise3 = promise2.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
});

// 响应失败，其中一个promise失败，通过catch()方法添加错误处理:报错或显示默认图像
let errorCase = promise3.catch(e=>{
  console.log('There has a problem with your fetch operation:' + e.message);
});


// Promise.all();
let a = fetch('image/tea.jpg');
let b = fetch('image/coffee.jpg');
let c = fetch('description.txt');

// promises全部实现时(fullfilled),下述语句才会生效
Promise.all([a, b, c]).then(values => {
  console.log('success');
})

/* 因为我们并不关心fetch()操作何时完成，只想要加载数据，
所以可以对fetch()返回的promise先统一进行数据处理，再传递给Promise.all() */

// 加载数据的方法
function fetchAndDecode(url) {
  return fetch(url).then(response=>{
    // 辨别数据类型
    if (response.headers.get('content-type') === 'image/jpeg') {
      return response.blob();
    } else if (response.headers.get('content-type') === 'text/plain') {
      return response.text();
    }
  })
  .catch(e => {
    console.log('there has been a problem with your fetch operation' + e.message);
  })
  .finally(() => {
    console.log('fetch attempt for ' +  url + ' finished');
  })
}

// 调用函数， 获取解码图像和文本，返回promises存储在变量中
let coffee = fetchAndDecode('image/coffee.jpg');
let tea = fetchAndDecode('image/tea.jpg');
let description = fetchAndDecode('description.txt');
console.log(description);
Promise.all([coffee, tea, description]).then(values => {
  console.log(values);
  // 从资源对象创建URL
  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  // 增加资源
  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  // 增加文本
  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);

});